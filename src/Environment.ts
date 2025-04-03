import * as THREE from 'three';
import { Ufo } from './Ufo'; // Import the UFO class
import { SpaceNeedle } from './SpaceNeedle1'; // Import the SpaceNeedle class
// Import the terrain elevation function
import { getTerrainElevation } from './SeattleElevationGrid';
// Import coordinate projection
import { projectToGameCoords } from './coordinateUtils'; 

/**
 * Contains functions to create the environment elements like ground, city, and mountains.
 */

/**
 * Environment.ts
 * 
 * Creates environmental elements for the Seattle UFO Battle game,
 * including ground, city buildings, mountains, and UFOs.
 */

// Re-usable texture creation function
/**
 * Creates a texture for building windows using Canvas.
 * Generates moderately sized, clearly visible windows.
 * @returns {THREE.CanvasTexture} A texture to apply to building materials.
 */
function createBuildingTexture(): THREE.CanvasTexture {
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d')!;
	// Using reasonably sized canvas
	canvas.width = 512;
	canvas.height = 512;

	// Choose from a variety of building colors
	const buildingColors = [
		'#505050', // Medium gray
		'#454d60', // Blue-gray
		'#605048', // Brown-gray
		'#495c42'  // Green-gray
	];
	const buildingColor = buildingColors[Math.floor(Math.random() * buildingColors.length)];

	// Fill background with selected building color
	context.fillStyle = buildingColor;
	context.fillRect(0, 0, canvas.width, canvas.height);

	// Moderate window parameters - not too big, not too small
	const windowWidth = 60;    // Moderately sized windows
	const windowHeight = 80;   // Not too tall
	const gap = 40;            // Reasonable gaps between windows

	// Add a subtle facade texture
	context.globalAlpha = 0.1;
	context.fillStyle = '#ffffff';
	const lineSpacing = 80;
	for (let x = 0; x < canvas.width; x += lineSpacing) {
		context.fillRect(x, 0, 2, canvas.height);
	}
	context.globalAlpha = 1.0;
	
	// Create a grid of windows (4x4)
	const rows = 4;
	const columns = 4;
	const rowHeight = canvas.height / rows;
	const columnWidth = canvas.width / columns;
	
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < columns; col++) {
			const x = (col * columnWidth) + (columnWidth - windowWidth) / 2;
			const y = (row * rowHeight) + (rowHeight - windowHeight) / 2;
			drawWindowSimple(context, x, y, windowWidth, windowHeight);
		}
	}

	const texture = new THREE.CanvasTexture(canvas);
	texture.needsUpdate = true;
	return texture;
}

/**
 * Draws a simplified window with clear visibility.
 * @param {CanvasRenderingContext2D} context The canvas context
 * @param {number} x X position
 * @param {number} y Y position
 * @param {number} width Window width
 * @param {number} height Window height
 */
function drawWindowSimple(
	context: CanvasRenderingContext2D, 
	x: number, 
	y: number, 
	width: number, 
	height: number
): void {
	// Draw window frame
	context.fillStyle = '#000000';
	context.fillRect(x - 2, y - 2, width + 4, height + 4);
	
	// Randomly light up windows (30% chance)
	if (Math.random() > 0.7) {
		// Illuminated window
		context.fillStyle = '#ffff88';
		context.fillRect(x, y, width, height);
	} else {
		// Dark window
		context.fillStyle = '#1a1a2a';
		context.fillRect(x, y, width, height);
	}
}

/**
 * Draws a single large window.
 * @param {CanvasRenderingContext2D} context The canvas context
 * @param {number} x X position
 * @param {number} y Y position
 * @param {number} width Window width
 * @param {number} height Window height
 */
function drawLargeWindow(
	context: CanvasRenderingContext2D, 
	x: number, 
	y: number, 
	width: number, 
	height: number
): void {
	// Draw window frame (thick black border)
	context.fillStyle = '#000000';
	context.fillRect(x - 2, y - 2, width + 4, height + 4);
	
	// Randomly light up window (30% chance)
	if (Math.random() > 0.7) {
		// Yellow illuminated window
		context.fillStyle = '#ffff88';
	} else {
		// Dark blue-gray window
		context.fillStyle = '#1a1a2a';
	}
	
	// Fill window interior
	context.fillRect(x, y, width, height);
}

/**
 * Creates the ground plane and adds a road grid.
 * @param {THREE.Scene} scene The scene to add the ground and roads to.
 * @deprecated This function is likely no longer needed as we use the Seattle terrain model.
 */
export function createGround(scene: THREE.Scene): void {
    const groundSize = 1000;
    const groundGeometry = new THREE.PlaneGeometry(groundSize, groundSize);
    const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x4b7320 }); // Green grass color
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2; // Rotate to be horizontal
    ground.position.y = -0.5; // Position base ground slightly below origin
    scene.add(ground);

    // --- Road Grid Parameters (Match createCity) ---
    const blockSize = 8; // Size of the building block area
    const roadWidth = 2; // Width of the roads
    const cellSize = blockSize + roadWidth; // Total size of one grid cell
    const roadColor = 0x555555; // Lighter gray for roads
    const roadYOffset = -0.48; // Position slightly above ground to prevent z-fighting

    const roadMaterial = new THREE.MeshPhongMaterial({ color: roadColor });

    // Determine how many grid lines are needed to cover the ground plane
    const numGridLines = Math.ceil(groundSize / cellSize);

    // --- Create Road Meshes ---
    for (let i = -numGridLines / 2; i <= numGridLines / 2; i++) {
        // Calculate the center position for this grid line's road
        const lineCenter = i * cellSize - cellSize / 2 + blockSize / 2; // Center of the block area
        const roadPosition = lineCenter + blockSize / 2 + roadWidth / 2; // Center of the road area

        // Roads parallel to Z axis (running North/South)
        const roadZGeometry = new THREE.PlaneGeometry(roadWidth, groundSize);
        const roadZ = new THREE.Mesh(roadZGeometry, roadMaterial);
        roadZ.rotation.x = -Math.PI / 2;
        roadZ.position.set(roadPosition, roadYOffset, 0);
        scene.add(roadZ);

        // Roads parallel to X axis (running East/West)
        const roadXGeometry = new THREE.PlaneGeometry(groundSize, roadWidth);
        const roadX = new THREE.Mesh(roadXGeometry, roadMaterial);
        roadX.rotation.x = -Math.PI / 2;
        roadX.position.set(0, roadYOffset, roadPosition);
        scene.add(roadX);
    }
}

/**
 * Creates city buildings randomly placed on the terrain grid, avoiding water,
 * with density and height decreasing based on distance from a central point.
 * @param {THREE.Scene} scene The scene to add the city to.
 * @returns {THREE.Mesh[]} An array of the created building meshes.
 */
export async function createCity(scene: THREE.Scene): Promise<THREE.Mesh[]> {
    console.log("Placing buildings based on distance from downtown...");
    
    // --- Downtown Center --- 
    const downtownLat = 47.607;
    const downtownLng = -122.333;
    const [downtownX, downtownZ] = projectToGameCoords(downtownLng, downtownLat);
    console.log(`Downtown center projected to game coordinates: (${downtownX}, ${downtownZ})`);

    // --- Space Needle Location ---
    // Define Space Needle coordinates for building height restriction zone
    const spaceNeedleLat = 47.623;
    const spaceNeedleLng = -122.349;
    const [spaceNeedleX, spaceNeedleZ] = projectToGameCoords(spaceNeedleLng, spaceNeedleLat);
    console.log(`Space Needle location: (${spaceNeedleX}, ${spaceNeedleZ})`);
    
    // Define a zone around the Space Needle where buildings will be shorter
    const spaceNeedleZoneRadius = 500; // Zone where buildings will be height-restricted
    // Height parameters for Space Needle zone buildings (in game units)
    const minBuildingHeightNearNeedle = 30;  // Adjusted min height
    const maxBuildingHeightNearNeedle = 55; // Adjusted max height, still shorter than downtown
    // Increase building density in Space Needle area to create a dense urban feel with short buildings
    const spaceNeedleDensityBoost = 2.0; // Double the density for more buildings
    // Building size factor for Space Needle zone (smaller buildings but more of them)
    const needleBuildingSizeFactor = 0.5; // Smaller footprint for buildings around Space Needle
    console.log(`Creating building height restriction zone with radius ${spaceNeedleZoneRadius} around Space Needle`);

    // --- Building Placement Parameters --- 
    const placementAreaHalfSize = 3500; // Slightly larger area to ensure falloff is visible
    const numberOfPlacementAttempts = 20000; // Significantly increase attempts for density
    const buildingCheckRadius = 8; // Can be smaller as density controls spacing now
    const baseMaxBuildingHeight = 180; // Reduced max height (was 600)
    const baseMinBuildingHeight = 5;  // Reduced min height (was 15)
    const buildingBaseMaxSize = 50;  // Slightly larger max base size
    const buildingBaseMinSize = 10;  
    const maxDistanceForDensity = 2500; // Distance from center beyond which density is effectively zero
    const densityFalloffPower = 2.0; // Controls how quickly density drops (higher value = faster drop)

    // --- Define Building Types --- //
    // Simplified building types with varying shapes - adjusted for better proportions
    const buildingTypes = [
        { name: 'standard', widthRatio: 1.0, heightMultiplier: 1.0, probability: 0.5 },
        { name: 'tall-thin', widthRatio: 0.6, heightMultiplier: 1.5, probability: 0.3 },
        { name: 'wide-short', widthRatio: 1.4, heightMultiplier: 0.8, probability: 0.2 }
    ];

    // --- Materials --- //
    // Create multiple textures for more variety
    const buildingTextures = [
        createBuildingTexture(),
        createBuildingTexture(),
        createBuildingTexture(),
        createBuildingTexture()
    ];
    
    // Apply texture wrapping to all textures
    buildingTextures.forEach(texture => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
    });
    
    // Create various roof materials with more distinct colors
    const roofMaterials = [
        new THREE.MeshPhongMaterial({ color: 0x444444 }), // Standard dark gray
        new THREE.MeshPhongMaterial({ color: 0x666666 }), // Medium gray
        new THREE.MeshPhongMaterial({ color: 0x333344 })  // Blue-gray
    ];
    
    const buildings: THREE.Mesh[] = []; 
    const buildingPositions: THREE.Vector2[] = []; 

    console.log(`Attempting to place buildings (max ${numberOfPlacementAttempts} attempts)...`);

    // Reduce the number of placement attempts for better performance
    const actualAttempts = Math.min(numberOfPlacementAttempts, 15000);

    for (let i = 0; i < actualAttempts; i++) {
        // Generate random potential (x, z) coordinates within the placement area
        const potentialX = (Math.random() - 0.5) * 2 * placementAreaHalfSize;
        const potentialZ = (Math.random() - 0.5) * 2 * placementAreaHalfSize;

        // --- Check if within Space Needle zone and calculate height restriction ---
        let spaceNeedleHeightFactor = 1.0; // Default: no restriction
        const distanceToSpaceNeedleSq = Math.pow(potentialX - spaceNeedleX, 2) + Math.pow(potentialZ - spaceNeedleZ, 2);
        const distanceToSpaceNeedle = Math.sqrt(distanceToSpaceNeedleSq);
        
        if (distanceToSpaceNeedle < spaceNeedleZoneRadius) {
            // Calculate height restriction based on distance from Space Needle
            // Normalize distance (0 = at needle, 1 = at zone edge)
            const normalizedDistance = distanceToSpaceNeedle / spaceNeedleZoneRadius;
            // Apply exponential curve so buildings get taller more quickly as they get farther from needle
            spaceNeedleHeightFactor = Math.pow(normalizedDistance, 1.5) * 0.3;
            
            // Increase chances of placing a building in the Space Needle area (more density)
            if (Math.random() > 0.7) {
                continue; // Skip only 30% of placements to increase density
            }
        }

        // --- Density Calculation (based on distance from downtown) --- 
        const distanceSq = Math.pow(potentialX - downtownX, 2) + Math.pow(potentialZ - downtownZ, 2);
        const distance = Math.sqrt(distanceSq);
        
        // Calculate normalized density (1 at center, 0 at maxDistanceForDensity)
        // Use a power function for falloff
        let densityFactor = Math.max(0, 1.0 - Math.pow(distance / maxDistanceForDensity, densityFalloffPower));
        // Clamp density factor
        densityFactor = Math.min(1.0, Math.max(0.0, densityFactor));
        
        // Boost density around Space Needle if in that zone
        if (distanceToSpaceNeedle < spaceNeedleZoneRadius) {
            densityFactor = Math.min(1.0, densityFactor * spaceNeedleDensityBoost);
        }

        // Probability check: Higher density = higher chance of placing a building
        if (Math.random() > densityFactor) { // Direct probability based on density factor
           continue; // Skip placement based on probability
        }

        // --- Overlap Check --- 
        let tooClose = false;
        for (const pos of buildingPositions) {
            const distSq = Math.pow(potentialX - pos.x, 2) + Math.pow(potentialZ - pos.y, 2);
            // Check radius can be simpler now
            if (distSq < buildingCheckRadius * buildingCheckRadius) {
                tooClose = true;
                break;
            }
        }
        if (tooClose) continue; 

        // --- Terrain Height Check --- 
        const terrainY = getTerrainElevation(potentialX, potentialZ);
        if (terrainY <= 0.5) { // Simple check: if elevation is at or below water level, skip
            continue; // Skip placing building in water
        }

        // --- Select Building Type ---
        // Choose a building type based on weighted probabilities
        let selectedType = buildingTypes[0]; // Default to standard
        const randomValue = Math.random();
        let cumulativeProbability = 0;
        
        for (const type of buildingTypes) {
            cumulativeProbability += type.probability;
            if (randomValue <= cumulativeProbability) {
                selectedType = type;
                break;
            }
        }

        // --- Place Building --- 
        // Adjust height based on density, Space Needle proximity, and building type
        // Original height calculation based on downtown density
        const downtownHeightMax = baseMinBuildingHeight + (baseMaxBuildingHeight - baseMinBuildingHeight) * densityFactor;
        const downtownHeightMin = baseMinBuildingHeight + (baseMinBuildingHeight * densityFactor * 0.2);
        
        let height;
        // If within Space Needle zone, apply height restriction
        if (spaceNeedleHeightFactor < 1.0) {
            // Scale height between minBuildingHeightNearNeedle and maxBuildingHeightNearNeedle
            // based on distance from needle
            const needleZoneMaxHeight = minBuildingHeightNearNeedle + 
                (maxBuildingHeightNearNeedle - minBuildingHeightNearNeedle) * spaceNeedleHeightFactor;
            
            // Add some variation to heights, but keep them low
            // More variation farther from needle
            const heightVariation = 0.3 + (spaceNeedleHeightFactor * 0.7);
            height = minBuildingHeightNearNeedle + 
                (Math.random() * heightVariation) * (needleZoneMaxHeight - minBuildingHeightNearNeedle);
        } else {
            // Regular downtown height calculation
            height = downtownHeightMin + Math.random() * (downtownHeightMax - downtownHeightMin);
        }
        
        // Apply building type height multiplier
        height *= selectedType.heightMultiplier;
        
        // Adjust base size based on density and location
        const sizeFactor = 0.7 + 0.5 * densityFactor; // Buildings slightly larger near downtown
        
        // For Space Needle zone, make building footprints smaller
        const needleSizeFactor = spaceNeedleHeightFactor < 1.0 ? needleBuildingSizeFactor : 1.0;
        
        // Calculate final dimensions, applying the width ratio from the building type
        const baseSize = buildingBaseMinSize + Math.random() * (buildingBaseMaxSize - buildingBaseMinSize);
        const width = baseSize * sizeFactor * needleSizeFactor * selectedType.widthRatio;
        const depth = baseSize * sizeFactor * needleSizeFactor / selectedType.widthRatio;

        // Use simple box geometry for all buildings
        const buildingGeometry = new THREE.BoxGeometry(width, height, depth);

        // UV Scaling - Corrected for LARGE windows (minimal repetition)
        const uvAttribute = buildingGeometry.getAttribute('uv');
        for (let j = 0; j < uvAttribute.count; j++) {
            const u = uvAttribute.getX(j);
            const v = uvAttribute.getY(j);
            // Use very SMALL multipliers for u and v to make the texture repeat very few times
            // This ensures windows appear large on the building face
            const repeatFactorX = 1; // Repeat texture roughly once horizontally
            const repeatFactorY = Math.max(1, Math.floor(height / Math.max(width, depth))); // Repeat vertically based on aspect ratio (taller buildings repeat more)
            uvAttribute.setXY(j, u * repeatFactorX, v * repeatFactorY);
        }
        uvAttribute.needsUpdate = true;

        // Select materials randomly for variety
        const textureIndex = Math.floor(Math.random() * buildingTextures.length);
        const roofIndex = Math.floor(Math.random() * roofMaterials.length);
        
        const sideMaterial = new THREE.MeshPhongMaterial({ map: buildingTextures[textureIndex] });
        const roofMaterial = roofMaterials[roofIndex];
        
        const buildingMaterials = [
            sideMaterial, sideMaterial, roofMaterial, roofMaterial, sideMaterial, sideMaterial
        ];

        const building = new THREE.Mesh(buildingGeometry, buildingMaterials);
        building.position.set(potentialX, terrainY + height / 2, potentialZ);
        building.castShadow = true;
        building.receiveShadow = true; 

        scene.add(building);
        buildings.push(building);
        buildingPositions.push(new THREE.Vector2(potentialX, potentialZ)); 
    }

    console.log(`Successfully placed ${buildings.length} buildings.`);
    return buildings; 
}

/**
 * Creates a distant mountain range using a displaced PlaneGeometry.
 * @param {THREE.Scene} scene The scene to add the mountains to.
 */
export function createMountains(scene: THREE.Scene): void {
    const mountainSize = 1800;     // Slightly wider
    const mountainHeight = 150;   // Increased height significantly
    const mountainSegments = 120;  // Increased segments for detail with height
    const mountainDistance = -600; // Brought closer

    const geometry = new THREE.PlaneGeometry(mountainSize, mountainHeight, mountainSegments, mountainSegments / 5);
    const positionAttribute = geometry.attributes.position;

    for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const noiseFactor = Math.cos(x * 0.2) * Math.sin(x * 0.3 + i * 0.01) + Math.random() * 0.2;
        const displacement = noiseFactor * (mountainHeight / 3) * (1 - Math.abs(x) / (mountainSize / 2));
        if (y > -mountainHeight / 4) {
             positionAttribute.setZ(i, positionAttribute.getZ(i) + displacement);
        }
    }
    geometry.computeVertexNormals();

    const material = new THREE.MeshPhongMaterial({
        color: 0x666677, // Rocky gray/blue
        shininess: 10
    });

    // Add snow caps (simple approach using vertex colors or a second material)
    // Let's try vertex colors for simplicity here.
    const colors: number[] = [];
    const snowLine = mountainHeight * 0.50; // Adjust snow line relative to new height
    const snowColor = new THREE.Color(0xffffff);
    const rockColor = new THREE.Color(0x666677);

    for (let i = 0; i < positionAttribute.count; i++) {
        const y = positionAttribute.getY(i);
        const z = positionAttribute.getZ(i); // Get the displaced height
        const worldY = y + z; // Approximate world height

        if (worldY > snowLine) {
            // Blend color based on height above snow line for a softer transition
            const snowFactor = Math.min(1, (worldY - snowLine) / (mountainHeight * 0.3)); // Normalize 0-1
            const finalColor = rockColor.clone().lerp(snowColor, snowFactor);
            colors.push(finalColor.r, finalColor.g, finalColor.b);
        } else {
            colors.push(rockColor.r, rockColor.g, rockColor.b);
        }
    }
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    material.vertexColors = true; // Tell material to use vertex colors
    material.color.set(0xffffff); // Set base color to white when using vertex colors


    const mountains = new THREE.Mesh(geometry, material);
    mountains.rotation.x = Math.PI / 40; // Even less tilt
    // Adjust Y position: base near y=0, center adjusted for visual placement
    mountains.position.set(0, mountainHeight * 0.4, mountainDistance);
    scene.add(mountains);
}

/**
 * Creates a specified number of UFO objects and places them to circle around the Space Needle.
 * @param {THREE.Scene} scene The scene to add the UFOs to.
 * @param {number} count The number of UFOs to create.
 * @param {SpaceNeedle} spaceNeedle Reference to the Space Needle for UFOs to target.
 * @returns {Ufo[]} An array containing all the created UFO objects.
 */
export function createUfos(scene: THREE.Scene, count: number = 10, spaceNeedle: SpaceNeedle | null = null): Ufo[] { // Doubled the default count from 5 to 10
    const ufos: Ufo[] = [];
    
    // Space Needle coordinates from SpaceNeedle modules
    const SPACE_NEEDLE_COORDINATES = {
        latitude: 47.623,
        longitude: -122.349
    };
    
    // Project the Space Needle coordinates to get its position in the game world
    const [spaceNeedleX, spaceNeedleZ] = projectToGameCoords(SPACE_NEEDLE_COORDINATES.longitude, SPACE_NEEDLE_COORDINATES.latitude);
    
    // Get the terrain elevation at the Space Needle's position
    const terrainElevation = getTerrainElevation(spaceNeedleX, spaceNeedleZ);
    
    // Space Needle's position in the game world
    const spaceNeedlePosition = new THREE.Vector3(spaceNeedleX, terrainElevation + 2, spaceNeedleZ);
    
    console.log(`Creating UFOs to circle around Space Needle at position: (${spaceNeedleX}, ${terrainElevation + 2}, ${spaceNeedleZ})`);
    
    // Create specified number of UFOs with different orbit heights and speeds
    for (let i = 0; i < count; i++) {
        // Create initial positions at different heights and angles around the Space Needle
        const angle = (i / count) * Math.PI * 2; // Distribute UFOs evenly around the circle
        const radius = 80 + (i % 3) * 20; // Vary the orbit radius between 80-120 units
        const height = 100 + (i % 5) * 30; // Vary heights between 100-220 units above terrain
        
        // Calculate initial position
        const x = spaceNeedleX + Math.cos(angle) * radius;
        const z = spaceNeedleZ + Math.sin(angle) * radius;
        const y = terrainElevation + height;
        
        // Create a new UFO at this position with reference to the Space Needle
        const ufo = new Ufo(scene, new THREE.Vector3(x, y, z), spaceNeedle);
        
        // Set the Space Needle as the center of the orbit
        ufo.setInitialPosition(spaceNeedlePosition.clone());
        
        // Set UFO orbit properties
        ufo.setPathRadius(radius);
        ufo.setSpeed(0.9 + (i % 4) * 0.3); // Increased by 50% from 0.6-1.2 to 0.9-1.8 for faster UFOs
        ufo.setPathHeight(height);
        ufo.setPathAngle(angle); // Set initial angle in the orbit
        
        // Add to collection and add mesh to scene
        ufos.push(ufo);
        scene.add(ufo.mesh);
    }
    
    return ufos;
} 