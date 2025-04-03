/**
 * SpaceNeedle.ts
 * 
 * Creates a 3D model of the Seattle Space Needle and places it at its real-world location.
 * The Space Needle is represented using primitive Three.js geometries to create a recognizable silhouette.
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
    // Base platform and legs
    baseDiameter: 80,    // Diameter of the base
    baseHeight: 8,       // Reduced height of the base platform
    legHeight: 90,       // Reduced height of the supporting legs (half)
    legWidth: 8,         // Width of each supporting leg
    numLegs: 5,          // Number of supporting legs
    
    // Main column/shaft
    shaftBottomDiameter: 40, // Diameter at the bottom of the main shaft
    shaftTopDiameter: 20,    // Diameter at the top of the shaft
    shaftHeight: 200,        // Reduced height of the main shaft (half)
    
    // Main observation deck
    deckDiameter: 120,   // Diameter of the observation deck
    deckHeight: 20,      // Reduced height of the observation deck (half)
    deckRimWidth: 15,    // Width of the deck's outer rim
    
    // Top spire
    spireDiameter: 8,    // Diameter of the top spire
    spireHeight: 50,     // Reduced height of the top spire (half)
    
    // Total height
    totalHeight: 368     // Reduced total height (half of previous 735)
};

// Colors for different parts of the Space Needle
const COLORS = {
    base: 0xFFFAE6,         // Cream white for base
    legs: 0xFFFAE6,         // Cream white for legs
    shaft: 0xFFFAE6,        // Cream white for main shaft
    deck: 0xFF5500,         // Bright orange for observation deck
    deckWindows: 0x6699cc,  // Blue-tinted glass for windows
    spire: 0xFFFAE6,        // Cream white for the top spire
    deckRim: 0xFF7722       // Slightly lighter orange for the rim
};

/**
 * Creates a 3D model of the Seattle Space Needle
 * @returns {THREE.Group} A Three.js Group containing the Space Needle model
 */
export function createSpaceNeedle(): THREE.Group {
    // Create a group to hold all parts of the Space Needle
    const spaceNeedleGroup = new THREE.Group();
    
    // Create the base platform
    const baseGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.baseDiameter / 2, 
        DIMENSIONS.baseDiameter / 2, 
        DIMENSIONS.baseHeight, 
        32
    );
    const baseMaterial = new THREE.MeshStandardMaterial({ 
        color: COLORS.base,
        roughness: 0.7,
        metalness: 0.3
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = DIMENSIONS.baseHeight / 2;
    base.castShadow = true;
    base.receiveShadow = true;
    spaceNeedleGroup.add(base);
    
    // Create the supporting legs
    const legGroup = new THREE.Group();
    const legHeight = DIMENSIONS.legHeight;
    const legRadius = DIMENSIONS.legWidth / 2;
    const legDistance = DIMENSIONS.baseDiameter / 2 - 5; // Distance from center
    
    for (let i = 0; i < DIMENSIONS.numLegs; i++) {
        const angle = (i / DIMENSIONS.numLegs) * Math.PI * 2;
        const legGeometry = new THREE.CylinderGeometry(
            legRadius, legRadius, legHeight, 8
        );
        const legMaterial = new THREE.MeshStandardMaterial({ 
            color: COLORS.legs,
            roughness: 0.5,
            metalness: 0.5
        });
        const leg = new THREE.Mesh(legGeometry, legMaterial);
        
        // Position the leg at an angle around the base
        leg.position.x = Math.cos(angle) * legDistance;
        leg.position.z = Math.sin(angle) * legDistance;
        
        // Tilt the leg inward toward the center
        leg.position.y = legHeight / 2 + DIMENSIONS.baseHeight;
        leg.rotation.x = Math.PI / 16; // Slight tilt
        leg.rotation.z = -angle; // Rotate around to point inward
        
        leg.castShadow = true;
        leg.receiveShadow = true;
        legGroup.add(leg);
    }
    spaceNeedleGroup.add(legGroup);
    
    // Create the main shaft/column
    const shaftHeight = DIMENSIONS.shaftHeight;
    const shaftGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.shaftTopDiameter / 2,
        DIMENSIONS.shaftBottomDiameter / 2,
        shaftHeight,
        16
    );
    const shaftMaterial = new THREE.MeshStandardMaterial({ 
        color: COLORS.shaft,
        roughness: 0.3,
        metalness: 0.7
    });
    const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    shaft.position.y = DIMENSIONS.baseHeight + DIMENSIONS.legHeight + shaftHeight / 2;
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    spaceNeedleGroup.add(shaft);
    
    // Create the observation deck (UFO-like disc)
    const deckGroup = new THREE.Group();
    
    // Main disc
    const deckBottomY = DIMENSIONS.baseHeight + DIMENSIONS.legHeight + shaftHeight;
    const deckGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.deckDiameter / 2,
        DIMENSIONS.deckDiameter / 2,
        DIMENSIONS.deckHeight,
        32
    );
    const deckMaterial = new THREE.MeshStandardMaterial({ 
        color: COLORS.deck,
        roughness: 0.2,
        metalness: 0.3,
        emissive: 0xFF2200,
        emissiveIntensity: 0.2
    });
    const deck = new THREE.Mesh(deckGeometry, deckMaterial);
    deck.position.y = deckBottomY + DIMENSIONS.deckHeight / 2;
    deck.castShadow = true;
    deck.receiveShadow = true;
    deckGroup.add(deck);
    
    // Windows strip (blue glass around the deck)
    const windowsGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.deckDiameter / 2 + 0.1,  // Slightly larger than deck
        DIMENSIONS.deckDiameter / 2 + 0.1,
        DIMENSIONS.deckHeight * 0.4,
        32
    );
    const windowsMaterial = new THREE.MeshStandardMaterial({ 
        color: COLORS.deckWindows,
        roughness: 0.1,
        metalness: 0.2,
        transparent: true,
        opacity: 0.8
    });
    const windows = new THREE.Mesh(windowsGeometry, windowsMaterial);
    windows.position.y = deckBottomY + DIMENSIONS.deckHeight * 0.6;
    windows.castShadow = true;
    windows.receiveShadow = true;
    deckGroup.add(windows);
    
    // The observation deck's rim/edge
    const deckRimGeometry = new THREE.TorusGeometry(
        DIMENSIONS.deckDiameter / 2 + DIMENSIONS.deckRimWidth / 2,
        DIMENSIONS.deckRimWidth / 2,
        16,
        48
    );
    const deckRimMaterial = new THREE.MeshStandardMaterial({ 
        color: COLORS.deckRim,
        roughness: 0.2,
        metalness: 0.8,
        emissive: 0xFF4400,
        emissiveIntensity: 0.2
    });
    const deckRim = new THREE.Mesh(deckRimGeometry, deckRimMaterial);
    deckRim.position.y = deckBottomY + DIMENSIONS.deckHeight * 0.75;
    deckRim.rotation.x = Math.PI / 2; // Rotate to be horizontal
    deckRim.castShadow = true;
    deckRim.receiveShadow = true;
    deckGroup.add(deckRim);
    
    spaceNeedleGroup.add(deckGroup);
    
    // Create the top spire
    const spireGeometry = new THREE.CylinderGeometry(
        0, // Point at top
        DIMENSIONS.spireDiameter / 2,
        DIMENSIONS.spireHeight,
        8
    );
    const spireMaterial = new THREE.MeshStandardMaterial({ 
        color: COLORS.spire,
        roughness: 0.2,
        metalness: 0.8
    });
    const spire = new THREE.Mesh(spireGeometry, spireMaterial);
    const spireBottomY = deckBottomY + DIMENSIONS.deckHeight;
    spire.position.y = spireBottomY + DIMENSIONS.spireHeight / 2;
    spire.castShadow = true;
    spire.receiveShadow = true;
    spaceNeedleGroup.add(spire);
    
    return spaceNeedleGroup;
}

/**
 * Places the Space Needle at its real-world coordinates in the game world
 * @param {THREE.Scene} scene - The Three.js scene to add the Space Needle to
 * @returns {SpaceNeedle} The Space Needle instance with health tracking
 */
export function addSpaceNeedleToScene(scene: THREE.Scene): SpaceNeedle {
    console.log("Adding Space Needle to scene at coordinates:", SPACE_NEEDLE_COORDINATES);
    
    // Create the Space Needle model
    const spaceNeedleMesh = createSpaceNeedle();
    
    // Project the real-world coordinates to game world coordinates
    const [x, z] = projectToGameCoords(SPACE_NEEDLE_COORDINATES.longitude, SPACE_NEEDLE_COORDINATES.latitude);
    console.log(`Space Needle positioned at game coordinates: (${x}, ${z})`);
    
    // Get the terrain elevation at the Space Needle's position
    const terrainElevation = getTerrainElevation(x, z);
    console.log(`Terrain elevation at Space Needle: ${terrainElevation}`);
    
    // Position the Space Needle at the correct coordinates and elevation
    // Add a slight offset to ensure it's standing above the terrain
    spaceNeedleMesh.position.set(x, terrainElevation + 2, z);
    
    // Add to scene
    scene.add(spaceNeedleMesh);
    
    // Create and return the SpaceNeedle instance with health tracking
    return new SpaceNeedle(spaceNeedleMesh);
} 