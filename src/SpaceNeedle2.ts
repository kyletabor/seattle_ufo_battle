/**
 * SpaceNeedle2.ts
 * 
 * Creates a stylized representation of the Seattle Space Needle.
 * This version has exaggerated proportions and bold features for visual impact.
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

// Define the dimensions of the Space Needle components
// Exaggerated for stylized appearance
const DIMENSIONS = {
    // Base platform
    baseRadius: 25,
    baseHeight: 10,
    
    // Triple legs - critical iconic feature
    numLegs: 3,
    legRadius: 8,            // Thick, bold legs
    legHeight: 120,          // Tall legs
    legAngleOffset: 0,       // Starting angle for first leg
    legDistanceFromCenter: 20, // Distance from center at base
    legCurveStrength: 2.2,   // How dramatic the leg curves are
    
    // Main shaft
    shaftBottomRadius: 18,
    shaftTopRadius: 15,
    shaftHeight: 130,
    
    // Observation deck - highly exaggerated for impact
    deckLowerRadius: 20,
    deckUpperRadius: 85,     // Dramatically wide deck
    deckHeight: 30,          // Tall deck
    deckThickness: 10,       // Thick prominent edge
    
    // Top spire
    spireHeight: 70,
    spireBottomRadius: 6,
    spireTopRadius: 2,
    
    // Total height
    totalHeight: 360
};

// Bold, high-contrast colors
const COLORS = {
    base: 0x444444,         // Dark gray base
    legs: 0xFFFFFF,         // Pure white legs
    shaft: 0xF5F5F5,        // Off-white shaft
    deckEdge: 0xFF3300,     // Vibrant orange deck edge
    deckBody: 0xFFFFFF,     // White deck
    deckWindows: 0x00AAFF,  // Bright blue windows
    spire: 0xF0F0F0         // White spire
};

/**
 * Creates a stylized model of the Seattle Space Needle
 * @returns {THREE.Group} A Three.js Group containing the Space Needle model
 */
export function createSpaceNeedle(): THREE.Group {
    const spaceNeedleGroup = new THREE.Group();
    
    // 1. Create a bold base platform
    const baseGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.baseRadius,
        DIMENSIONS.baseRadius * 1.2,
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
    
    // 2. Create 3 dramatic support legs (visual focal point)
    const legGroup = new THREE.Group();
    
    for (let i = 0; i < DIMENSIONS.numLegs; i++) {
        const angle = (i / DIMENSIONS.numLegs) * Math.PI * 2 + DIMENSIONS.legAngleOffset;
        
        // Create dramatically curved leg using bezier path
        const legCurve = new THREE.CubicBezierCurve3(
            // Start point at base perimeter
            new THREE.Vector3(
                Math.cos(angle) * DIMENSIONS.legDistanceFromCenter,
                DIMENSIONS.baseHeight,
                Math.sin(angle) * DIMENSIONS.legDistanceFromCenter
            ),
            // First control point - extreme outward curve
            new THREE.Vector3(
                Math.cos(angle) * DIMENSIONS.legDistanceFromCenter * DIMENSIONS.legCurveStrength,
                DIMENSIONS.legHeight * 0.25,
                Math.sin(angle) * DIMENSIONS.legDistanceFromCenter * DIMENSIONS.legCurveStrength
            ),
            // Second control point - dramatic inward curve
            new THREE.Vector3(
                Math.cos(angle) * DIMENSIONS.legDistanceFromCenter * 0.5,
                DIMENSIONS.legHeight * 0.75,
                Math.sin(angle) * DIMENSIONS.legDistanceFromCenter * 0.5
            ),
            // End point at shaft bottom
            new THREE.Vector3(
                0,
                DIMENSIONS.baseHeight + DIMENSIONS.legHeight,
                0
            )
        );
        
        // Create bold leg geometry
        const legGeometry = new THREE.TubeGeometry(
            legCurve,
            32,  // Higher segment count for smooth curves
            DIMENSIONS.legRadius,
            12,  // Higher radial segments for smoother tube
            false
        );
        
        const legMaterial = new THREE.MeshStandardMaterial({
            color: COLORS.legs,
            roughness: 0.2,
            metalness: 0.7,
            emissive: 0xDDDDDD,
            emissiveIntensity: 0.2
        });
        
        const leg = new THREE.Mesh(legGeometry, legMaterial);
        leg.castShadow = true;
        leg.receiveShadow = true;
        legGroup.add(leg);
    }
    
    spaceNeedleGroup.add(legGroup);
    
    // 3. Create main shaft
    const shaftTopY = DIMENSIONS.baseHeight + DIMENSIONS.legHeight;
    const shaftGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.shaftTopRadius,
        DIMENSIONS.shaftBottomRadius,
        DIMENSIONS.shaftHeight,
        24
    );
    const shaftMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.shaft,
        roughness: 0.2,
        metalness: 0.6,
        emissive: 0xDDDDDD,
        emissiveIntensity: 0.1
    });
    const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    shaft.position.y = shaftTopY + DIMENSIONS.shaftHeight / 2;
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    spaceNeedleGroup.add(shaft);
    
    // 4. Create the exaggerated observation deck (dramatically wide)
    const deckGroup = new THREE.Group();
    const deckY = shaftTopY + DIMENSIONS.shaftHeight;
    deckGroup.position.y = deckY;
    
    // Create dramatic flying saucer shape
    const deckShape = [];
    
    // Dramatically curved profile for strong silhouette
    // Inner edge connects to shaft
    deckShape.push(new THREE.Vector2(DIMENSIONS.shaftTopRadius * 0.95, 0));
    
    // Bottom curve spreads out wide
    deckShape.push(new THREE.Vector2(DIMENSIONS.deckLowerRadius, DIMENSIONS.deckHeight * 0.05));
    deckShape.push(new THREE.Vector2(DIMENSIONS.deckUpperRadius * 0.7, DIMENSIONS.deckHeight * 0.2));
    deckShape.push(new THREE.Vector2(DIMENSIONS.deckUpperRadius * 0.9, DIMENSIONS.deckHeight * 0.3));
    deckShape.push(new THREE.Vector2(DIMENSIONS.deckUpperRadius, DIMENSIONS.deckHeight * 0.5)); // Widest point
    
    // Top curves back in
    deckShape.push(new THREE.Vector2(DIMENSIONS.deckUpperRadius * 0.85, DIMENSIONS.deckHeight * 0.7));
    deckShape.push(new THREE.Vector2(DIMENSIONS.deckUpperRadius * 0.6, DIMENSIONS.deckHeight * 0.9));
    deckShape.push(new THREE.Vector2(DIMENSIONS.deckUpperRadius * 0.4, DIMENSIONS.deckHeight));
    
    // Inner top
    deckShape.push(new THREE.Vector2(DIMENSIONS.shaftTopRadius * 0.95, DIMENSIONS.deckHeight));
    deckShape.push(new THREE.Vector2(DIMENSIONS.shaftTopRadius * 0.95, 0));
    
    // Create the deck using lathe geometry
    const deckGeometry = new THREE.LatheGeometry(
        deckShape,
        32,
        0,
        2 * Math.PI
    );
    
    const deckMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.deckBody,
        roughness: 0.3,
        metalness: 0.5
    });
    
    const deck = new THREE.Mesh(deckGeometry, deckMaterial);
    deck.castShadow = true;
    deck.receiveShadow = true;
    deckGroup.add(deck);
    
    // 5. Add a bold orange edge band (signature feature)
    const edgeBandGeometry = new THREE.TorusGeometry(
        DIMENSIONS.deckUpperRadius,  // Radius to match widest part of deck
        DIMENSIONS.deckThickness,    // Thick, bold edge
        16,
        96
    );
    
    const edgeBandMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.deckEdge,
        roughness: 0.3,
        metalness: 0.6,
        emissive: 0xFF2200,
        emissiveIntensity: 0.4
    });
    
    const edgeBand = new THREE.Mesh(edgeBandGeometry, edgeBandMaterial);
    edgeBand.position.y = DIMENSIONS.deckHeight * 0.5; // Position at the widest part
    edgeBand.rotation.x = Math.PI / 2; // Make horizontal
    edgeBand.castShadow = true;
    edgeBand.receiveShadow = true;
    deckGroup.add(edgeBand);
    
    // 6. Add dramatic glowing windows
    const windowsGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.deckUpperRadius * 1.02, // Slightly larger than the deck
        DIMENSIONS.deckUpperRadius * 1.02,
        DIMENSIONS.deckHeight * 0.4,
        48,
        1,
        true // Open-ended for window effect
    );
    
    const windowsMaterial = new THREE.MeshPhysicalMaterial({
        color: COLORS.deckWindows,
        roughness: 0.1,
        metalness: 0.2,
        transparent: true,
        opacity: 0.8,
        transmission: 0.3,
        emissive: COLORS.deckWindows,
        emissiveIntensity: 0.8 // Strong glow for visual impact
    });
    
    const windows = new THREE.Mesh(windowsGeometry, windowsMaterial);
    windows.position.y = DIMENSIONS.deckHeight * 0.5; // Center at widest part
    windows.castShadow = false;
    windows.receiveShadow = true;
    deckGroup.add(windows);
    
    // 7. Add an exaggerated top spire
    const spireGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.spireTopRadius,
        DIMENSIONS.spireBottomRadius,
        DIMENSIONS.spireHeight,
        16
    );
    
    const spireMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.spire,
        roughness: 0.1,
        metalness: 0.8,
        emissive: 0xFFFFFF,
        emissiveIntensity: 0.2
    });
    
    const spire = new THREE.Mesh(spireGeometry, spireMaterial);
    spire.position.y = DIMENSIONS.deckHeight + DIMENSIONS.spireHeight / 2;
    spire.castShadow = true;
    spire.receiveShadow = true;
    deckGroup.add(spire);
    
    // Add the deck group to the main model
    spaceNeedleGroup.add(deckGroup);
    
    return spaceNeedleGroup;
}

/**
 * Places the stylized Space Needle at its real-world coordinates in the game world
 * @param {THREE.Scene} scene - The Three.js scene to add the Space Needle to
 * @returns {SpaceNeedle} The Space Needle instance with health tracking
 */
export function addSpaceNeedleToScene(scene: THREE.Scene): SpaceNeedle {
    console.log("Adding improved stylized Space Needle (Version 2) to scene");
    
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