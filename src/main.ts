/**
 * main.ts
 * 
 * Main entry point for the Seattle UFO Battle application.
 * Sets up the Three.js scene, camera, and manages the main game loop.
 */

import * as THREE from 'three';
import './style.css'; // Import styles
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// Import GUI from three examples instead of dat.gui directly
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { createSeattleTerrainFromGrid } from './SeattleElevationGrid';

// Import Modules
import { Plane } from './Plane';
import { createGround, createCity, createUfos } from './Environment';
// Revert to using original city system for now
// import { createStylizedBuildings } from './StylizedBuildings';
import { InputController } from './Controls';
import { PhysicsEngine } from './Physics';
import { CameraController } from './Camera';
import { UI } from './UI';
import { AudioManager } from './AudioManager'; // Import the new AudioManager
import { Ufo } from './Ufo'; // Import the new UFO class
import { Projectile } from './Projectile'; // Import the Projectile class
import { ParticleExplosion } from './Explosion'; // Renamed from Explosion
import { MushroomCloudExplosion } from './MushroomCloudExplosion'; // Import the new mushroom cloud
import { RainbowExplosion } from './RainbowExplosion'; // Import our new rainbow explosion
// Import Seattle environment components
import { loadGeoJsonData, createSeattleGeometry } from './SeattleEnvironment';
// Import our elevation data systems
import { createSimpleSeattleTerrain } from './SimpleSeattleElevation';
import { projectToGameCoords } from './coordinateUtils';
// Import Space Needle component versions
import { addSpaceNeedleToScene as addSpaceNeedle1, SpaceNeedle } from './SpaceNeedle1';
import { addSpaceNeedleToScene as addSpaceNeedle2 } from './SpaceNeedle2';
import { addSpaceNeedleToScene as addSpaceNeedle3 } from './SpaceNeedle3';
// Remove performance metrics
// import { PerformanceMetrics } from './PerformanceMetrics';

// Check if we're in layout mode (using URL param: ?mode=layout)
const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode') || 'game'; // Default to 'game' mode unless specified
const isLayoutMode = mode === 'layout';
// Get Space Needle version from URL (default to version 1 - architectural)
const spaceNeedleVersion = urlParams.get('needle') || '1';
// Check if we're in quick-start mode (for testing)
const quickStart = urlParams.get('quickstart') === 'true';
console.log(`Running in ${isLayoutMode ? 'layout design' : 'game'} mode with URL mode parameter: "${mode}"`);
console.log(`Using Space Needle version: ${spaceNeedleVersion}`);
console.log(`Quick start mode: ${quickStart ? 'enabled' : 'disabled'}`);

// Configuration
const CAMERA_START_POSITION: [number, number, number] = [0, 1000, 1000]; // Starting camera position with type annotation
const CAMERA_FOV = 60;                        // Field of view in degrees

// Space Needle coordinates (needed for positioning plane)
const SPACE_NEEDLE_COORDINATES = {
    latitude: 47.623,
    longitude: -122.349
};
// Convert Space Needle coordinates to game world coordinates
const [spaceNeedleX, spaceNeedleZ] = projectToGameCoords(SPACE_NEEDLE_COORDINATES.longitude, SPACE_NEEDLE_COORDINATES.latitude);

// Basic Scene Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb); // Sky blue background

// Create the camera
let camera = new THREE.PerspectiveCamera(
	CAMERA_FOV, window.innerWidth / window.innerHeight, 0.1, 10000
);

// Set up renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Camera positioning
camera.position.set(CAMERA_START_POSITION[0], CAMERA_START_POSITION[1], CAMERA_START_POSITION[2]);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Setup input controller for player controls
const inputController = new InputController();

// Grid helper - useful for development
// const gridHelper = new THREE.GridHelper(10000, 100, 0x444444, 0x888888);
// scene.add(gridHelper);

// Add axes helper - commented out to remove the green line
// const axesHelper = new THREE.AxesHelper(500);
// scene.add(axesHelper);

// Create the player plane reference (but don't initialize yet, wait for terrain)
let playerPlane: Plane | null = null;
let physicsEngine: PhysicsEngine | null = null;
let cameraController: CameraController | null = null;
// Initialize audio manager globally - BEFORE DOMContentLoaded listener
let audioManager: AudioManager = new AudioManager('/audio/spaceman_showdown.mp3');
let activeProjectiles: Projectile[] = [];
let ufos: Ufo[] = [];
let lastShotTime = 0;
const SHOT_COOLDOWN = 0.3; // Cooldown between shots in seconds
let isGameStarted = false; // Track if the start modal has been dismissed
let isPaused = true; // Game pause state - START PAUSED (Master Pause State)
let isUserPaused = false; // Start with user NOT paused, pause is due to start modal
let isAboutModalOpen = false; // Tracks if the About modal is open

// State for audio toggles
let soundFxEnabled = true; // Default sound effects ON
let musicEnabled = false; // Default music OFF

// Add clock for delta time calculation
const clock = new THREE.Clock();

// Debug counter for animation frames
let frameCount = 0;

// Reference to Space Needle object
let spaceNeedle: SpaceNeedle | null = null;

// Game state tracking
let playerScore = 0;
let totalUfos = 0; // Will be set when UFOs are created
let ufosDestroyed = 0;
let gameStatus: 'playing' | 'won' | 'lost' = 'playing';

// Remove performance metrics tracker
// let performanceMetrics: PerformanceMetrics | null = null;

// Lighting
setupLighting();

// GUI for development options - Commented out to remove the debug controls UI
// const gui = new GUI();
// gui.add({ wireframe: false }, 'wireframe').onChange(value => {
// 	scene.traverse(object => {
// 		if (object instanceof THREE.Mesh && !(object.material instanceof THREE.LineBasicMaterial)) {
// 			object.material.wireframe = value;
// 		}
// 	});
// });

// Position camera based on mode
setupCamera();

// Load Seattle terrain and environment
loadTerrainAndEnvironment();

// Initialize audio manager - REMOVED OLD CALL
// initAudioManager();

// Declare ui variable here, initially null
let ui: UI | null = null;

// Placeholder function definition, will be properly defined within animate()
let handlePauseKeys: (event: KeyboardEvent) => void = () => {};

// Add restart key handler for game over / victory screens
window.addEventListener('keydown', (event: KeyboardEvent) => {
    if ((gameStatus === 'won' || gameStatus === 'lost') && (event.key === 'r' || event.key === 'R')) {
        console.log('Restart key pressed, reloading game...');
        window.location.reload();
    }
});

// --- Wait for DOM Ready --- 
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded event fired - initializing UI and starting animation");
    
    // Get modal and toggle elements
    const startModal = document.getElementById('start-modal');
    const soundToggle = document.getElementById('sound-toggle') as HTMLInputElement;
    const musicToggle = document.getElementById('music-toggle') as HTMLInputElement;
    const pauseModal = document.getElementById('pause-modal'); // Get pause modal
    const pauseSoundToggle = document.getElementById('pause-sound-toggle') as HTMLInputElement;
    const pauseMusicToggle = document.getElementById('pause-music-toggle') as HTMLInputElement;
    // Get About Modal elements
    const aboutModal = document.getElementById('about-modal');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const aboutCloseButton = document.getElementById('about-close-button');
    // Get New Buttons
    const pauseAboutButton = document.getElementById('pause-about-button');
    const pauseShareButton = document.getElementById('pause-share-button');
    const aboutShareButton = document.getElementById('about-share-button');

    // Check if elements exist before proceeding
    if (!startModal || !soundToggle || !musicToggle || !pauseModal || !pauseSoundToggle || !pauseMusicToggle || !aboutModal || !hamburgerMenu || !aboutCloseButton || !pauseAboutButton || !pauseShareButton || !aboutShareButton) { // Added checks for new elements
        console.error("One or more required modal/button elements not found!");
        // Optionally start the game anyway or show an error
        isPaused = false; 
        isUserPaused = false;
        isGameStarted = true; // Ensure game starts if elements are missing
    } else {
        // Store initial toggle states from start modal
        soundFxEnabled = soundToggle.checked;
        musicEnabled = musicToggle.checked;
        console.log(`Initial settings: Sound FX = ${soundFxEnabled}, Music = ${musicEnabled}`);

        // --- Start Game Handler --- 
        // Make the handler async to await audio initialization
        const startGameHandler = async (event: Event) => { 
            // Prevent starting if game already started (e.g., rapid click/key)
            if (isGameStarted) return; 

            console.log("User interaction detected (keydown), attempting to start game and initialize audio...");
            
            // --- Initialize AudioManager on user interaction ---
            try {
                // Await initialization BEFORE proceeding
                await audioManager?.initialize(); 
                console.log("AudioManager initialized after user interaction.");

                // --- Apply initial audio settings AFTER successful initialization --- 
                // Use the new placeholder method for sound effects
                audioManager?.setSoundEffectsEnabled(soundFxEnabled);
                // Use the new method to control music state
                audioManager?.setMusicEnabled(musicEnabled); 
                console.log(`Initial audio settings applied: Sound FX = ${soundFxEnabled}, Music = ${musicEnabled}`);

            } catch (error) {
                 console.error("Failed to initialize AudioManager:", error);
                 // Decide how to handle failure - e.g., game continues without audio
            }

            // --- Proceed with starting the game ---
            console.log("Hiding start modal and unpausing game...");
            startModal.style.display = 'none'; // Hide the modal
            isUserPaused = false; // Ensure user pause state is false
            isGameStarted = true; // Mark game as started
            updatePauseState(); // Update master pause state based on isUserPaused/isAboutModalOpen

            // --- Remove the listeners now that the game has started --- 
            console.log("Removing start game event listener.");
            window.removeEventListener('keydown', startGameHandler);

            // Log final state
            console.log(`Game started.`);
        };

        // Use keydown and listen on the window
        window.addEventListener('keydown', startGameHandler);

        // Add listeners for START modal toggle changes (updates state before game starts)
        soundToggle.addEventListener('change', () => {
            soundFxEnabled = soundToggle.checked;
            console.log('Start modal - Sound FX toggled:', soundFxEnabled);
            // Apply immediately if game already started and audio manager exists (edge case)
            if (isGameStarted && audioManager) {
                audioManager.setSoundEffectsEnabled(soundFxEnabled);
            }
        });
        musicToggle.addEventListener('change', () => {
            musicEnabled = musicToggle.checked;
            console.log('Start modal - Music toggled:', musicEnabled);
             // Apply immediately if game already started and audio manager exists (edge case)
             if (isGameStarted && audioManager) {
                audioManager.setMusicEnabled(musicEnabled);
            }
        });

        // --- Pause Modal Toggle Listeners --- 
        pauseSoundToggle.addEventListener('change', () => {
            soundFxEnabled = pauseSoundToggle.checked;
            console.log('Pause modal - Sound FX toggled:', soundFxEnabled);
            // Apply immediately if AudioManager exists
            audioManager?.setSoundEffectsEnabled(soundFxEnabled); 
        });
        pauseMusicToggle.addEventListener('change', () => {
            musicEnabled = pauseMusicToggle.checked;
            console.log('Pause modal - Music toggled:', musicEnabled);
            // Apply immediately if AudioManager exists
            // Use the new method to control music state
            audioManager?.setMusicEnabled(musicEnabled);
        });

        // --- Hamburger Menu & About Modal Listeners --- 
        hamburgerMenu.addEventListener('click', () => {
            console.log("Hamburger menu clicked, opening About modal...");
            openAboutModal();
        });

        aboutCloseButton.addEventListener('click', () => {
            console.log("About modal close button clicked...");
            closeAboutModal();
        });

        // --- Pause Modal Button Listeners --- 
        pauseAboutButton.addEventListener('click', () => {
            console.log("Pause modal 'About Game' button clicked...");
            openAboutModal(); 
            // Note: Pause modal should hide automatically via updatePauseState when About opens
        });

        pauseShareButton.addEventListener('click', () => {
            console.log("Pause modal 'Share Game' button clicked...");
            shareGame();
        });

        // --- About Modal Button Listeners --- 
        aboutShareButton.addEventListener('click', () => {
            console.log("About modal 'Share Game' button clicked...");
            shareGame();
        });
    }
    
    // Create UI instance *after* DOM is ready
    ui = new UI(); 
    console.log("UI initialized: ", ui ? "success" : "failed");
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Start the animation loop *after* DOM is ready
    animate();

    console.log("Animation loop started");

    // Initialize score and health display
    ui.updateScore(playerScore);
    
    if (spaceNeedle) {
        ui.updateSpaceNeedleHealth(spaceNeedle.getHealth());
    }

    // If quick start mode is enabled, automatically start the game
    if (quickStart) {
        console.log("Quick start mode enabled, automatically starting game");
        isGameStarted = true;
        isPaused = false;
        isUserPaused = false;
        
        // Hide start modal if it exists
        const startModal = document.getElementById('start-modal');
        if (startModal) {
            startModal.style.display = 'none';
        }
        
        // Initialize audio without waiting for user input
        audioManager?.initialize().catch(error => {
            console.error("Failed to initialize audio in quick start mode:", error);
        });
    }
});

/**
 * Sets up the scene lighting
 */
function setupLighting() {
	// Add directional light (sun)
	const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
	sunLight.position.set(500, 1000, 500);
	sunLight.castShadow = true;
	
	// Adjust shadow properties for better quality
	sunLight.shadow.mapSize.width = 2048;
	sunLight.shadow.mapSize.height = 2048;
	sunLight.shadow.camera.near = 0.5;
	sunLight.shadow.camera.far = 5000;
	sunLight.shadow.bias = -0.0001;
	
	// Set up shadow camera to cover the scene
	const shadowSize = 2000;
	sunLight.shadow.camera.left = -shadowSize;
	sunLight.shadow.camera.right = shadowSize;
	sunLight.shadow.camera.top = shadowSize;
	sunLight.shadow.camera.bottom = -shadowSize;
	
	scene.add(sunLight);
	
	// Add ambient light for global illumination
	const ambientLight = new THREE.AmbientLight(0x555555);
	scene.add(ambientLight);
	
	// Add a hemisphere light for better sky/ground lighting
	const hemiLight = new THREE.HemisphereLight(0xaaaaff, 0x806040, 0.6);
	scene.add(hemiLight);
	
	console.log("Scene lighting configured");
}

/**
 * Sets up the camera position and target based on the selected mode
 */
function setupCamera() {
	// Default position for flat terrain (1:1 elevation scale)
	camera.position.set(1500, 500, 2000);
	camera.lookAt(new THREE.Vector3(0, 0, 0));
	
	// Adjust based on URL mode
	if (mode === 'layout') {
		console.log("Layout mode: Using top-down camera");
		// Top-down view
		camera.position.set(0, 1000, 0);
		camera.lookAt(new THREE.Vector3(0, 0, 0));
	} else if (mode === 'terrain') {
		console.log("Terrain mode: Using terrain-focused camera");
		// Lower angle to better see the flat terrain
		camera.position.set(2000, 400, 2000);
		camera.lookAt(new THREE.Vector3(0, 10, 0));
	} else if (mode === 'battle') {
		console.log("Battle mode: Using action camera");
		// Lower angle for action view
		camera.position.set(-1000, 200, 1000);
		camera.lookAt(new THREE.Vector3(0, 20, 0));
	}
	
	controls.update();
	console.log(`Camera positioned at (${camera.position.x}, ${camera.position.y}, ${camera.position.z})`);
}

/**
 * Loads the Seattle terrain using the grid-based method
 * Also adds other environment elements like city and UFOs.
 */
async function loadTerrainAndEnvironment() {
	console.log("Starting to load Seattle terrain and environment...");
	console.log(`Current mode: ${mode}, isLayoutMode: ${isLayoutMode}`);
	
	try {
		// Create terrain from the elevation grid data
		console.log("Adding camera to scene and loading terrain...");
		scene.add(camera); // Add camera first
		await createSeattleTerrainFromGrid(scene);
		console.log("Seattle terrain loaded successfully");

		// Revert to using original city system
		console.log("Creating city buildings...");
		await createCity(scene);
		console.log("City created using original system");

		// Add the Space Needle at its real-world location based on selected version
		console.log(`Adding Space Needle version ${spaceNeedleVersion} to scene...`);
		spaceNeedle = addSpaceNeedleToScene(scene);
		console.log("Space Needle added to the scene");
        
        // Get the terrain elevation at the Space Needle's position
        const terrainElevation = spaceNeedle.mesh.position.y;
        console.log(`Terrain elevation at Space Needle position: ${terrainElevation}`);

		// Now that terrain and Space Needle are loaded, initialize the plane
		if (!isLayoutMode) {
			console.log("Initializing player plane in game mode...");
			// Create the player plane
			playerPlane = new Plane();
			scene.add(playerPlane.mesh);
			
			// Calculate initial position
			// Start in front of and higher than the Space Needle, looking toward it
			const initialHeight = terrainElevation + 200; // 200 units above terrain at Space Needle
			// Reduced from 1000 to 500 to start the plane closer to the Space Needle
			// This makes the initial gameplay more focused on the iconic landmark
			const initialDistance = 500; // 500 units away from Space Needle (previously 1000)
			const initialPosition = new THREE.Vector3(
				spaceNeedleX - initialDistance, // Starting south of the Space Needle
				initialHeight,
				spaceNeedleZ - initialDistance // Starting south-east of the Space Needle
			);
			
			// Calculate direction to look at the Space Needle
			const directionToSpaceNeedle = new THREE.Vector3(
			    spaceNeedleX - initialPosition.x,
			    0, // Don't look up or down
			    spaceNeedleZ - initialPosition.z
			).normalize();
			
			// Rotate the direction vector clockwise by ~45 degrees (-π/4 radians)
			// This ensures the Space Needle is clearly visible from the cockpit
			const rotationAngle = -Math.PI / 4; // -45 degrees, rotating clockwise
			const rotatedDirection = new THREE.Vector3(
				directionToSpaceNeedle.x * Math.cos(rotationAngle) - directionToSpaceNeedle.z * Math.sin(rotationAngle),
				0,
				directionToSpaceNeedle.x * Math.sin(rotationAngle) + directionToSpaceNeedle.z * Math.cos(rotationAngle)
			).normalize();
			
			// Create a quaternion for the initial orientation using the rotated direction
			const initialRotation = new THREE.Quaternion();
			const defaultDirection = new THREE.Vector3(0, 0, -1); // Plane's default forward direction
			initialRotation.setFromUnitVectors(defaultDirection, rotatedDirection);
			
			// Set the plane's position and orientation
			playerPlane.setInitialState(initialPosition, initialRotation);
			console.log(`Player plane positioned at (${initialPosition.x}, ${initialPosition.y}, ${initialPosition.z})`);
			console.log("Player plane created and rotated clockwise 45° to provide a clear view of the Space Needle");
			
			// Initialize physics for plane
			console.log("Initializing physics engine...");
			physicsEngine = new PhysicsEngine(playerPlane.mesh);
			
			// Set up camera controller to follow plane
			console.log("Setting up camera controller to follow plane...");
			cameraController = new CameraController(camera, renderer.domElement);
			cameraController.setTarget(playerPlane.mesh);
			cameraController.setCameraMode('follow');
			
			// Add UFOs only if not in layout mode
			console.log("Creating UFOs...");
			ufos = createUfos(scene, 10, spaceNeedle);
			totalUfos = ufos.length; // Store the total number of UFOs
			console.log(`Created ${ufos.length} UFOs`);
			
			console.log("Game initialization complete - ready to play!");
		} else {
			console.log("Layout mode active - skipping player and UFO initialization");
		}

	} catch (error) {
		console.error("Failed to load terrain and environment:", error);
		// Add a simple fallback plane
		addEmergencyFallbackPlane();
	}
}

/**
 * Adds a fallback plane to the scene if terrain loading fails
 */
function addEmergencyFallbackPlane() {
	console.error("❌ USING EMERGENCY FALLBACK PLANE - TERRAIN LOADING FAILED");
	
	// Create an error text canvas
	const canvas = document.createElement('canvas');
	canvas.width = 1024;
	canvas.height = 1024;
	const context = canvas.getContext('2d');
	if (context) {
		context.fillStyle = 'red';
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = 'white';
		context.font = '48px Arial';
		context.textAlign = 'center';
		context.fillText('ERROR: TERRAIN LOADING FAILED', canvas.width/2, canvas.height/2 - 100);
		context.fillText('USING FALLBACK PLANE', canvas.width/2, canvas.height/2);
		context.font = '24px Arial';
		context.fillText('Check console for details', canvas.width/2, canvas.height/2 + 100);
	}
	const errorTexture = new THREE.CanvasTexture(canvas);
	
	const planeGeometry = new THREE.PlaneGeometry(5000, 5000);
	planeGeometry.rotateX(-Math.PI / 2); // Make horizontal
	
	const planeMaterial = new THREE.MeshStandardMaterial({
		map: errorTexture,
		color: 0xff0000,
		metalness: 0.1,
		roughness: 0.7
	});
	
	const plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.receiveShadow = true;
	scene.add(plane);
	
	// Add a water plane
	const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
	waterGeometry.rotateX(-Math.PI / 2);
	
	const waterMaterial = new THREE.MeshStandardMaterial({
		color: 0x0044aa,
		metalness: 0.3,
		roughness: 0.2,
		transparent: true,
		opacity: 0.8
	});
	
	const waterPlane = new THREE.Mesh(waterGeometry, waterMaterial);
	waterPlane.position.y = -5;
	scene.add(waterPlane);
	
	// Add a big error marker cube in the center
	const errorCubeGeometry = new THREE.BoxGeometry(200, 200, 200);
	const errorCubeMaterial = new THREE.MeshStandardMaterial({
		color: 0xff0000,
		emissive: 0xff0000,
		emissiveIntensity: 0.5
	});
	const errorCube = new THREE.Mesh(errorCubeGeometry, errorCubeMaterial);
	errorCube.position.set(0, 100, 0);
	scene.add(errorCube);
	
	console.error("⚠️ Fallback terrain added - game will not function correctly");
}

/**
 * Adds the specified version of the Space Needle to the scene
 * @param {THREE.Scene} scene - The scene to add the Space Needle to 
 * @returns {SpaceNeedle} The Space Needle instance with health tracking
 */
function addSpaceNeedleToScene(scene: THREE.Scene): SpaceNeedle {
	// Choose the Space Needle version based on URL parameter
	let spaceNeedleInstance: SpaceNeedle;
	switch(spaceNeedleVersion) {
		case '1':
			// Architectural version
			spaceNeedleInstance = addSpaceNeedle1(scene);
			break;
		case '2':
			// Stylized version
			spaceNeedleInstance = addSpaceNeedle2(scene);
			break;
		case '3':
		default:
			// Minimalist/iconic version
			spaceNeedleInstance = addSpaceNeedle3(scene);
			break;
	}
	return spaceNeedleInstance;
}

/**
 * Window resize handler - updates camera and renderer dimensions
 */
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

/**
 * Main animation loop
 */
function animate() {
	// Debug frame counter
	frameCount++;
	if (frameCount % 300 === 0) { // Log every 300 frames (approximately every 5 seconds at 60fps)
		console.log(`Animation frame: ${frameCount} - Game state: ${gameStatus}, Paused: ${isPaused}`);
	}
	
	// Get delta time for physics and animations
	const deltaTime = clock.getDelta();
	
    // --- Always render the scene, even when paused --- 
    renderer.render(scene, camera);

    // --- Handle Input Controller Update --- 
    // Update input regardless of pause state to catch pause toggle
	inputController.update();

    // --- Handle Pause Toggle --- 
    const pauseModal = document.getElementById('pause-modal');
    const pauseSoundToggle = document.getElementById('pause-sound-toggle') as HTMLInputElement;
    const pauseMusicToggle = document.getElementById('pause-music-toggle') as HTMLInputElement;

    // Function to handle unpausing (simplified, now handled by updatePauseState)
    // const unpauseGame = () => { ... }; // Removed old function

    // Function to handle pausing (simplified, now handled by updatePauseState)
    // const pauseGame = () => { ... }; // Removed old function

    // --- NEW: Update overall pause state --- 
    updatePauseState(); // Centralized pause logic

    // Re-defining handlePauseKeys here inside animate to ensure it captures current state.
    handlePauseKeys = (event: KeyboardEvent) => {
        // console.log(`Key pressed while paused: ${event.key}, AboutOpen: ${isAboutModalOpen}, UserPaused: ${isUserPaused}`);
        
        // Handle Escape key press
        if (event.key === 'Escape') {
            if (isAboutModalOpen) {
                // console.log("Escape pressed while About modal open, closing modal...");
                closeAboutModal();
            } else if (isUserPaused) { // Only unpause if it was user-initiated pause
                // console.log("Escape pressed while game paused (user), unpausing...");
                isUserPaused = false;
                updatePauseState(); // Update master pause state
            }
            return; // Stop further processing for Escape key
        }
        
        // Handle 'P' key press (toggle pause or close About modal)
        if (event.key === 'p' || event.key === 'P') {
             if (isAboutModalOpen) {
                // console.log("P pressed while About modal open, closing modal...");
                closeAboutModal();
            } else if (isUserPaused) { 
                // console.log("P pressed while game paused (user), unpausing...");
                isUserPaused = false;
                updatePauseState(); 
            }
            // Note: If game is unpaused, 'P' is handled by the inputController toggle logic directly
            return;
        }
        
        // Handle 'R' key press for restart (only when paused and About is not open)
        if (isPaused && !isAboutModalOpen && (event.key === 'r' || event.key === 'R')) {
            // console.log("Restarting game...");
            window.location.reload(); // Simple restart by reloading page
        }
    };
    // Listener adding/removing is handled within updatePauseState() correctly

    // Check for pause toggle input ('P' key) AFTER start modal is dismissed
	if (isGameStarted && inputController.didTogglePause()) {
         // If About modal is open, treat 'P' as closing it
         if (isAboutModalOpen) {
             // console.log("Pause toggle input detected while About open, closing modal...");
             closeAboutModal();
         } else {
             // Otherwise, toggle the user pause state
             // console.log("Pause toggle input detected, toggling user pause...");
             isUserPaused = !isUserPaused;
             updatePauseState(); // Update master pause state
         }
	}
	
    // --- Skip game logic updates if paused --- 
    // Use the master `isPaused` state
	if (isPaused) {
        // Update controls even when paused to allow camera movement (OrbitControls)
        controls.update(); 
		requestAnimationFrame(animate);
		return; // Skip the rest of the game logic
	}
	
    // --- Game Logic (Only runs if not paused) --- 

	// Update orbit controls (used when camera is not following plane)
	controls.update();
	
	// Update camera controller if it exists
	cameraController?.update(deltaTime); // Use optional chaining

    // --- Update Audio Listener Position ---
    if (audioManager && cameraController) {
        // Get camera position and orientation for the listener
        const listenerPosition = new THREE.Vector3();
        camera.getWorldPosition(listenerPosition);

        const listenerForward = new THREE.Vector3();
        camera.getWorldDirection(listenerForward);
        
        const listenerUp = new THREE.Vector3().copy(camera.up); // Get camera's up vector

        audioManager.updateListenerPosition(listenerPosition, listenerForward, listenerUp);
    }

	// Handle shooting input
	if (playerPlane && inputController.didShoot()) {
		const currentTime = clock.elapsedTime;
		if (currentTime - lastShotTime > SHOT_COOLDOWN) {
			const projectile = playerPlane.shoot();
			scene.add(projectile.mesh);
			activeProjectiles.push(projectile);
			lastShotTime = currentTime;
            // Play shooting sound effect
            audioManager?.playLaserShoot(); 
		}
	}
	
	// Update player plane physics if it exists
	if (playerPlane && physicsEngine) {
		// Get input values for plane control
		const inputs = {
			pitch: inputController.pitch, 
			roll: inputController.roll, 
			accelerate: inputController.accelerate, 
			decelerate: inputController.decelerate 
		};

		// Log plane positions and movement occassionally
		if (Math.random() < 0.01) { // Only log 1% of the time to avoid console spam
			// console.log(`Plane position: (${playerPlane.mesh.position.x.toFixed(1)}, ${playerPlane.mesh.position.y.toFixed(1)}, ${playerPlane.mesh.position.z.toFixed(1)})`);
			// console.log(`Inputs: pitch=${inputs.pitch}, roll=${inputs.roll}, accel=${inputs.accelerate}, decel=${inputs.decelerate}`);
		}

		// Update physics with input values
		physicsEngine.update(inputs, deltaTime);

		// Update propeller animation
		playerPlane.update(deltaTime);

		// Update UI with current speed (using optional chaining for safety)
		ui?.update(physicsEngine.getCurrentSpeed()); 
	}

	// Update UFOs
	ufos.forEach(ufo => {
		ufo.update(deltaTime);
	});
	
	// Update projectiles and check for collisions
	for (let i = activeProjectiles.length - 1; i >= 0; i--) {
		const projectile = activeProjectiles[i];
		const isActive = projectile.update(deltaTime);
		
		if (!isActive) {
			// Remove expired projectile
			scene.remove(projectile.mesh);
			activeProjectiles.splice(i, 1);
			continue;
		}
		
		// Check for collisions with UFOs
		for (let j = 0; j < ufos.length; j++) {
			const ufo = ufos[j];
			
			// Skip hit detection for already hit UFOs
			if (ufo.state !== 'flying') continue;
			
			// Simple distance-based collision detection
			const distance = projectile.mesh.position.distanceTo(ufo.mesh.position);
			if (distance < 25) { // Adjusted collision radius for larger UFOs
				// Hit the UFO
				ufo.hit();
				
                // Play UFO hit sound effect at the UFO's position
                audioManager?.playUfoHit(ufo.mesh.position.clone());

				// Create a rainbow explosion effect at the hit position
				const explosion = new RainbowExplosion(ufo.mesh.position.clone());
				scene.add(explosion.points);
				
				// Increase the score and UFO destroyed count
				playerScore += 10000;
				ufosDestroyed++;
				
				// Check if all UFOs have been destroyed
				if (ufosDestroyed >= totalUfos) {
				    handleVictory();
				}
				
				// Update UI with new score
				if (ui) {
				    ui.updateScore(playerScore);
				}
				
				// Remove projectile
				scene.remove(projectile.mesh);
				activeProjectiles.splice(i, 1);
				break;
			}
		}
	}

	// Check Space Needle health
	if (spaceNeedle && spaceNeedle.getHealth() <= 0) {
	    // Space Needle has been destroyed
	    handleGameOver();
	}
	
	// Update Space Needle health UI
	if (spaceNeedle && ui) {
	    ui.updateSpaceNeedleHealth(spaceNeedle.getHealth());
	}

	// Check for UFO crashes (state changed to 'crashed')
	for (let i = ufos.length - 1; i >= 0; i--) {
		const ufo = ufos[i];
		if (ufo.needsCrashEffect) {
			// Play crash sound effect at the UFO's final position
			audioManager?.playUfoCrash(ufo.mesh.position.clone()); 
			
			// Create visual explosion (Mushroom Cloud)
			const explosion = new MushroomCloudExplosion(ufo.mesh.position.clone());
			scene.add(explosion.points);
			
			// Reset the flag
			ufo.needsCrashEffect = false; 
			
			// Optionally remove the UFO mesh after a delay or keep it as wreckage
			// For now, we leave the crashed mesh
		}
	}

	// Request the next frame
	requestAnimationFrame(animate);
}

/**
 * Opens the About modal and pauses the game.
 */
function openAboutModal() {
    if (isAboutModalOpen) return; // Already open

    const aboutModal = document.getElementById('about-modal');
    if (aboutModal) {
        isAboutModalOpen = true;
        aboutModal.style.display = 'flex';
        updatePauseState(); // Ensure game pauses when modal opens
        console.log("About modal opened.");
    } else {
        console.error("About modal element not found!");
    }
}

/**
 * Closes the About modal and potentially unpauses the game.
 */
function closeAboutModal() {
    if (!isAboutModalOpen) return; // Already closed

    const aboutModal = document.getElementById('about-modal');
    if (aboutModal) {
        isAboutModalOpen = false;
        aboutModal.style.display = 'none';
        updatePauseState(); // Update pause state (might unpause if user wasn't paused)
        console.log("About modal closed.");
    } else {
        console.error("About modal element not found!");
    }
}

/**
 * Centralized function to manage the overall pause state based on
 * user pause requests and the About modal state.
 */
let wasListenerAdded = false; // Track if the pause key listener is active
function updatePauseState() {
    const pauseModal = document.getElementById('pause-modal');
    const pauseSoundToggle = document.getElementById('pause-sound-toggle') as HTMLInputElement;
    const pauseMusicToggle = document.getElementById('pause-music-toggle') as HTMLInputElement;

    // Determine the new master pause state
    const newPauseState = isUserPaused || isAboutModalOpen;

    // State change detected?
    if (newPauseState !== isPaused) {
        console.log(`Pause state changing from ${isPaused} to ${newPauseState} (UserPaused: ${isUserPaused}, AboutOpen: ${isAboutModalOpen})`);
        isPaused = newPauseState;

        if (isPaused) {
            // --- Actions when pausing --- 
            // Stop music (unless already stopped by modal opening)
            if (audioManager) audioManager.setMusicEnabled(false); 
            if (physicsEngine) physicsEngine.setEnabled(false);

            // Show pause modal ONLY if paused by user AND about modal is NOT open
            if (isUserPaused && !isAboutModalOpen && pauseModal && pauseSoundToggle && pauseMusicToggle) {
                // Sync toggles in pause modal before showing
                pauseSoundToggle.checked = soundFxEnabled;
                pauseMusicToggle.checked = musicEnabled;
                pauseModal.style.display = 'flex'; 
            } else if (pauseModal) {
                // Hide pause modal if paused for other reasons (e.g., About modal)
                pauseModal.style.display = 'none'; 
            }

            // Add key listeners specific to the pause state (if not already added)
            if (!wasListenerAdded) {
                window.addEventListener('keydown', handlePauseKeys);
                wasListenerAdded = true;
                console.log("Added pause key listener.");
            }

        } else {
             // --- Actions when unpausing --- 
             // Hide the pause modal if it was visible
             if (pauseModal) pauseModal.style.display = 'none';
             
             // Resume music based on user preference
             if (audioManager) audioManager.setMusicEnabled(musicEnabled); 
             if (physicsEngine) physicsEngine.setEnabled(true);

             // Remove pause-specific key listeners (if added)
             if (wasListenerAdded) {
                 window.removeEventListener('keydown', handlePauseKeys);
                 wasListenerAdded = false;
                 console.log("Removed pause key listener.");
             }
        }
    } else {
        // Even if pause state didn't change, ensure pause modal visibility is correct
        // (e.g., if About modal opened while user was paused)
        if (isPaused && pauseModal) {
             if (isUserPaused && !isAboutModalOpen) {
                 // Show pause modal if it should be visible but isn't
                 if (pauseModal.style.display === 'none') {
                     // Sync toggles just in case
                     if(pauseSoundToggle) pauseSoundToggle.checked = soundFxEnabled;
                     if(pauseMusicToggle) pauseMusicToggle.checked = musicEnabled;
                     pauseModal.style.display = 'flex'; 
                 }
             } else {
                 // Hide pause modal if it shouldn't be visible
                 if (pauseModal.style.display !== 'none') {
                     pauseModal.style.display = 'none';
                 }
             }
        }
    }
}

/**
 * Attempts to share the game using the Web Share API.
 */
async function shareGame() {
    const shareData = {
        title: 'Seattle UFO Battle',
        text: 'Help defend Seattle from UFOs in this retro flying game!',
        url: window.location.href // Share the current page URL
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
            console.log('Game shared successfully!');
        } catch (err) {
            // Handle errors, e.g., user cancelled the share
            // Check if err is an Error object and has a name property before accessing it
            if (err instanceof Error && err.name !== 'AbortError') { 
                 console.error('Error sharing game:', err);
            } else if (!(err instanceof Error) || (err instanceof Error && err.name === 'AbortError')) {
                // Log cancellation or non-Error objects differently, or just log cancellation
                 console.log('Share cancelled by user or non-standard error occurred.');
            }
        }
    } else {
        console.warn('Web Share API not supported in this browser. Cannot share automatically.');
        // Optionally: display a message to the user, or fallback to copying URL
        // For simplicity now, just logging a warning.
        // alert('Sharing not supported in your browser. Try copying the URL!');
    }
}

/**
 * Initializes the Three.js scene, camera, renderer, etc.
 */
function initThreeJS() {
// ... existing code ...

}

/**
 * Handle the game over condition when Space Needle is destroyed
 */
function handleGameOver() {
    if (gameStatus !== 'playing') return; // Already handled
    
    console.log('Game Over! Space Needle has been destroyed.');
    gameStatus = 'lost';
    
    // Show game over UI
    if (ui) {
        ui.showGameOver(playerScore);
    }
}

/**
 * Handle the victory condition when all UFOs are destroyed
 */
function handleVictory() {
    if (gameStatus !== 'playing') return; // Already handled
    
    console.log('Victory! All UFOs have been destroyed.');
    gameStatus = 'won';
    
    // Calculate bonus score based on remaining Space Needle health
    const needleHealthBonus = Math.round(spaceNeedle ? spaceNeedle.getHealth() * 1000 : 0);
    const finalScore = playerScore + needleHealthBonus;
    
    // Show victory UI
    if (ui) {
        ui.showVictory(playerScore, needleHealthBonus, finalScore);
    }
}
