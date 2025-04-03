/**
 * SpaceNeedle3.ts
 * 
 * Creates a minimalist, iconic representation of the Seattle Space Needle.
 * This version focuses on the most recognizable elements with a clean design.
 */

import * as THREE from 'three';
import { projectToGameCoords } from './coordinateUtils';
import { getTerrainElevation } from './SeattleElevationGrid';
import { SpaceNeedle } from './SpaceNeedle1'; // Import the SpaceNeedle class

// Space Needle real-world coordinates
const SPACE_NEEDLE_COORDINATES = {
    latitude: 47.623,
    longitude: -122.349
};

// Define the dimensions and proportions of the Space Needle components
const DIMENSIONS = {
    // Base platform
    baseRadius: 20,
    baseHeight: 5,
    
    // Critical feature: 3 distinct legs instead of a single support
    numLegs: 3,            // Exactly 3 legs for recognition
    legWidth: 8,           // Thicker for visibility
    legHeight: 95,         // Height of legs
    legOutwardFactor: 2.5, // How far out the legs extend
    
    // Main column/shaft - minimized for cleaner look
    shaftBottomRadius: 15,
    shaftTopRadius: 12,
    shaftHeight: 140,
    
    // Observation deck - made more prominent
    deckRadius: 70,        // Wider for emphasis
    deckHeight: 20,        // Taller for visibility
    
    // Top spire
    spireHeight: 50,
    spireRadius: 5,
    
    // Total height
    totalHeight: 310
};

// High contrast colors for clear visibility
const COLORS = {
    base: 0x999999,         // Light gray base
    legs: 0xFFFFFF,         // Pure white legs
    shaft: 0xFFFFFF,        // Pure white shaft
    deck: 0xFF4400,         // Bright orange deck
    deckTop: 0xFF6600,      // Slightly different top
    deckWindows: 0x00AAFF,  // Bright blue windows
    spire: 0xFFFFFF         // White spire
};

/**
 * Creates a minimalist, iconic model of the Seattle Space Needle
 * @returns {THREE.Group} A Three.js Group containing the Space Needle model
 */
export function createSpaceNeedle(): THREE.Group {
    const spaceNeedleGroup = new THREE.Group();
    
    // 1. Create a simple base
    const baseGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.baseRadius,
        DIMENSIONS.baseRadius * 1.2,
        DIMENSIONS.baseHeight,
        24
    );
    const baseMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.base,
        roughness: 0.5,
        metalness: 0.5
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = DIMENSIONS.baseHeight / 2;
    base.castShadow = true;
    base.receiveShadow = true;
    spaceNeedleGroup.add(base);
    
    // 2. Create 3 distinct supporting legs (critical change from previous version)
    const legGroup = new THREE.Group();
    
    for (let i = 0; i < DIMENSIONS.numLegs; i++) {
        const angle = (i / DIMENSIONS.numLegs) * Math.PI * 2;
        
        // Create clean, minimalist curved legs
        const legCurve = new THREE.CubicBezierCurve3(
            // Start at base edge
            new THREE.Vector3(
                Math.cos(angle) * DIMENSIONS.baseRadius,
                0,
                Math.sin(angle) * DIMENSIONS.baseRadius
            ),
            // Curve outward
            new THREE.Vector3(
                Math.cos(angle) * DIMENSIONS.baseRadius * DIMENSIONS.legOutwardFactor,
                DIMENSIONS.legHeight * 0.3,
                Math.sin(angle) * DIMENSIONS.baseRadius * DIMENSIONS.legOutwardFactor
            ),
            // Curve back inward
            new THREE.Vector3(
                Math.cos(angle) * DIMENSIONS.baseRadius * 0.7,
                DIMENSIONS.legHeight * 0.8,
                Math.sin(angle) * DIMENSIONS.baseRadius * 0.7
            ),
            // End at bottom of shaft
            new THREE.Vector3(0, DIMENSIONS.legHeight, 0)
        );
        
        // Create leg geometry
        const legGeometry = new THREE.TubeGeometry(
            legCurve,
            24,  // Enough segments for smooth curves
            DIMENSIONS.legWidth / 2,
            8,   // Radial segments
            false
        );
        
        const legMaterial = new THREE.MeshStandardMaterial({
            color: COLORS.legs,
            roughness: 0.3,
            metalness: 0.7,
            emissive: 0xCCCCCC,
            emissiveIntensity: 0.1
        });
        
        const leg = new THREE.Mesh(legGeometry, legMaterial);
        leg.castShadow = true;
        leg.receiveShadow = true;
        legGroup.add(leg);
    }
    
    spaceNeedleGroup.add(legGroup);
    
    // 3. Create main shaft - simple and clean
    const shaftGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.shaftTopRadius,
        DIMENSIONS.shaftBottomRadius,
        DIMENSIONS.shaftHeight,
        20
    );
    const shaftMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.shaft,
        roughness: 0.3,
        metalness: 0.7,
        emissive: 0xCCCCCC,
        emissiveIntensity: 0.1
    });
    const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    shaft.position.y = DIMENSIONS.baseHeight + DIMENSIONS.legHeight + DIMENSIONS.shaftHeight / 2;
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    spaceNeedleGroup.add(shaft);
    
    // 4. Create a more prominent observation deck
    const deckGroup = new THREE.Group();
    const deckBottomY = DIMENSIONS.baseHeight + DIMENSIONS.legHeight + DIMENSIONS.shaftHeight;
    
    // Create a simple but distinctive saucer shape
    const deckPoints = [];
    
    // Create profile with clean lines but distinctive shape
    // Bottom edge
    deckPoints.push(new THREE.Vector2(DIMENSIONS.deckRadius * 0.8, 0));
    
    // Curve outward (flying saucer shape)
    deckPoints.push(new THREE.Vector2(DIMENSIONS.deckRadius * 1.0, DIMENSIONS.deckHeight * 0.2));
    deckPoints.push(new THREE.Vector2(DIMENSIONS.deckRadius * 1.1, DIMENSIONS.deckHeight * 0.5)); // Widest point
    
    // Curve inward for top
    deckPoints.push(new THREE.Vector2(DIMENSIONS.deckRadius * 0.9, DIMENSIONS.deckHeight * 0.8));
    deckPoints.push(new THREE.Vector2(DIMENSIONS.deckRadius * 0.5, DIMENSIONS.deckHeight));
    
    // Inner top and bottom
    deckPoints.push(new THREE.Vector2(0, DIMENSIONS.deckHeight));
    deckPoints.push(new THREE.Vector2(0, 0));
    
    // Create the deck using lathe geometry
    const deckGeometry = new THREE.LatheGeometry(
        deckPoints,
        32,
        0,
        2 * Math.PI
    );
    
    const deckMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.deck,
        roughness: 0.2,
        metalness: 0.6,
        emissive: 0xFF2200,
        emissiveIntensity: 0.4
    });
    
    const deck = new THREE.Mesh(deckGeometry, deckMaterial);
    deck.position.y = deckBottomY;
    deck.castShadow = true;
    deck.receiveShadow = true;
    deckGroup.add(deck);
    
    // 5. Add a clear, glowing window band
    const windowsGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.deckRadius * 1.09, // Match the widest part of the deck
        DIMENSIONS.deckRadius * 1.09,
        DIMENSIONS.deckHeight * 0.3,
        32
    );
    
    const windowsMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.deckWindows,
        roughness: 0.1,
        metalness: 0.3,
        transparent: true,
        opacity: 0.9,
        emissive: COLORS.deckWindows,
        emissiveIntensity: 0.7 // Strong glow for visibility
    });
    
    const windows = new THREE.Mesh(windowsGeometry, windowsMaterial);
    windows.position.y = deckBottomY + DIMENSIONS.deckHeight * 0.5; // Center at the widest part
    windows.castShadow = false;
    windows.receiveShadow = true;
    deckGroup.add(windows);
    
    // 6. Add a simple top rim for better detail
    const topRimGeometry = new THREE.TorusGeometry(
        DIMENSIONS.deckRadius * 0.5,
        3, // Thin rim
        8,
        32
    );
    
    const topRimMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.deckTop,
        roughness: 0.3,
        metalness: 0.7,
        emissive: 0xFF4400,
        emissiveIntensity: 0.3
    });
    
    const topRim = new THREE.Mesh(topRimGeometry, topRimMaterial);
    topRim.position.y = deckBottomY + DIMENSIONS.deckHeight;
    topRim.rotation.x = Math.PI / 2; // Make horizontal
    topRim.castShadow = true;
    topRim.receiveShadow = true;
    deckGroup.add(topRim);
    
    // 7. Add the top spire
    const spireGeometry = new THREE.ConeGeometry(
        DIMENSIONS.spireRadius,
        DIMENSIONS.spireHeight,
        12
    );
    
    const spireMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.spire,
        roughness: 0.1,
        metalness: 0.9,
        emissive: 0xFFFFFF,
        emissiveIntensity: 0.3
    });
    
    const spire = new THREE.Mesh(spireGeometry, spireMaterial);
    spire.position.y = deckBottomY + DIMENSIONS.deckHeight + DIMENSIONS.spireHeight / 2;
    spire.castShadow = true;
    spire.receiveShadow = true;
    deckGroup.add(spire);
    
    // Add the deck group to the main model
    spaceNeedleGroup.add(deckGroup);
    
    return spaceNeedleGroup;
}

/**
 * Places the minimalist Space Needle at its real-world coordinates in the game world
 * @param {THREE.Scene} scene - The Three.js scene to add the Space Needle to
 * @returns {SpaceNeedle} The Space Needle instance with health tracking
 */
export function addSpaceNeedleToScene(scene: THREE.Scene): SpaceNeedle {
    console.log("Adding improved minimalist Space Needle (Version 3) to scene");
    
    // Create the Space Needle model
    const spaceNeedleMesh = createSpaceNeedle();
    
    // Project the real-world coordinates to game world coordinates
    const [x, z] = projectToGameCoords(SPACE_NEEDLE_COORDINATES.longitude, SPACE_NEEDLE_COORDINATES.latitude);
    console.log(`Space Needle positioned at game coordinates: (${x}, ${z})`);
    
    // Get the terrain elevation at the Space Needle's position
    const terrainElevation = getTerrainElevation(x, z);
    console.log(`Terrain elevation at Space Needle: ${terrainElevation}`);
    
    // Position the Space Needle at the correct coordinates and elevation
    spaceNeedleMesh.position.set(x, terrainElevation + 2, z);
    
    // Add to scene
    scene.add(spaceNeedleMesh);
    
    // Create and return the SpaceNeedle instance with health tracking
    return new SpaceNeedle(spaceNeedleMesh);
} 