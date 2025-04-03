/**
 * SpaceNeedle1.ts
 * 
 * Creates an architectural representation of the Seattle Space Needle.
 * This version focuses on realistic proportions and details while maintaining visual clarity.
 */

import * as THREE from 'three';
import { projectToGameCoords } from './coordinateUtils';
import { getTerrainElevation } from './SeattleElevationGrid';

// Space Needle real-world coordinates
const SPACE_NEEDLE_COORDINATES = {
    latitude: 47.623,
    longitude: -122.349
};

// Define the proportions of the Space Needle components
const DIMENSIONS = {
    // Base platform
    baseRadius: 30,
    baseHeight: 8,
    
    // Three support legs - architecturally accurate representation
    numLegs: 3,
    legRadius: 6,  // Substantial thickness for each leg
    legHeight: 230,
    legAngleOffset: 0, // Starting angle for the first leg
    legDistance: 22,   // Distance from center at base level
    
    // Cross-bracing between legs
    bracingLevels: 3,  // Number of bracing levels
    bracingThickness: 3,
    
    // Main shaft dimensions
    shaftRadius: 14,
    shaftHeight: 20,
    shaftTaper: 0.85,  // Taper factor for the top vs bottom
    
    // Observation deck dimensions
    deckLowerRadius: 42,
    deckUpperRadius: 48,
    deckHeight: 25,
    deckEdgeThickness: 6,
    
    // Restaurant level
    restaurantRadius: 30,
    restaurantHeight: 12,
    
    // Top spire
    spireBottomRadius: 4,
    spireTopRadius: 1,
    spireHeight: 55,
    
    // Total height
    totalHeight: 340
};

// Colors with architectural accuracy
const COLORS = {
    base: 0x444444,         // Dark gray concrete base
    legs: 0xFFFDF0,         // Very light cream for legs
    bracing: 0xFFFAF0,      // Very light cream for bracing
    shaft: 0xFFFDF0,        // Very light cream main shaft
    deckEdge: 0xFF4400,     // Orange observation deck edge
    deckBody: 0xFFFDF0,     // Very light cream observation deck
    deckWindows: 0x2288CC,  // Blue-tinted windows
    restaurant: 0xFFFDF0,   // Very light cream restaurant level
    spire: 0xFFFDF0         // Very light cream spire
};

/**
 * SpaceNeedle class that handles health and damage for the Space Needle
 */
export class SpaceNeedle {
    // The Three.js mesh group representing the Space Needle
    public mesh: THREE.Group;
    
    // Space Needle health - starts at 100
    private _health: number = 100;
    
    // The initial position coordinates
    private initialPosition: THREE.Vector3;
    
    /**
     * Creates a new SpaceNeedle instance
     * @param mesh The Three.js mesh group for the Space Needle
     */
    constructor(mesh: THREE.Group) {
        this.mesh = mesh;
        this.initialPosition = mesh.position.clone();
    }
    
    /**
     * Gets the current health of the Space Needle
     * @returns The current health as a number between 0-100
     */
    public getHealth(): number {
        return this._health;
    }
    
    /**
     * Damages the Space Needle by reducing its health
     * @param amount The amount of damage to apply (defaults to 0.5)
     * @returns Whether the Space Needle was destroyed (health <= 0)
     */
    public takeDamage(amount: number = 0.5): boolean {
        // Reduce health by the damage amount
        this._health = Math.max(0, this._health - amount);
        
        // Log when health hits certain thresholds
        if (this._health <= 75 && this._health > 74.5) {
            console.log('Space Needle at 75% health!');
        } else if (this._health <= 50 && this._health > 49.5) {
            console.log('Space Needle at 50% health!');
        } else if (this._health <= 25 && this._health > 24.5) {
            console.log('Space Needle at 25% health!');
        } else if (this._health <= 0) {
            console.log('Space Needle destroyed!');
            return true; // Destroyed
        }
        
        return false; // Not destroyed
    }
}

/**
 * Creates an architectural model of the Seattle Space Needle
 * @returns {THREE.Group} A Three.js Group containing the Space Needle model
 */
export function createSpaceNeedle(): THREE.Group {
    const spaceNeedleGroup = new THREE.Group();
    
    // 1. Create the base
    const baseGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.baseRadius, 
        DIMENSIONS.baseRadius * 1.1, 
        DIMENSIONS.baseHeight, 
        32
    );
    const baseMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.base,
        roughness: 0.6,
        metalness: 0.2
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = DIMENSIONS.baseHeight / 2;
    base.castShadow = true;
    base.receiveShadow = true;
    spaceNeedleGroup.add(base);
    
    // 2. Create the three support legs - key structural elements
    const legGroup = new THREE.Group();
    
    for (let i = 0; i < DIMENSIONS.numLegs; i++) {
        const angle = (i / DIMENSIONS.numLegs) * Math.PI * 2 + DIMENSIONS.legAngleOffset;
        
        // Create a curved leg using a custom path
        const legCurve = new THREE.CubicBezierCurve3(
            // Start from base perimeter
            new THREE.Vector3(
                Math.cos(angle) * DIMENSIONS.legDistance, 
                DIMENSIONS.baseHeight, 
                Math.sin(angle) * DIMENSIONS.legDistance
            ),
            // First control point - curves outward
            new THREE.Vector3(
                Math.cos(angle) * DIMENSIONS.legDistance * 1.3, 
                DIMENSIONS.legHeight * 0.3, 
                Math.sin(angle) * DIMENSIONS.legDistance * 1.3
            ),
            // Second control point - curves back inward
            new THREE.Vector3(
                Math.cos(angle) * DIMENSIONS.legDistance * 0.8, 
                DIMENSIONS.legHeight * 0.7, 
                Math.sin(angle) * DIMENSIONS.legDistance * 0.8
            ),
            // End point - converges at top
            new THREE.Vector3(
                0, 
                DIMENSIONS.baseHeight + DIMENSIONS.legHeight, 
                0
            )
        );
        
        // Convert curve to tube geometry
        const legGeometry = new THREE.TubeGeometry(
            legCurve, 
            32,  // Smooth curve with more segments
            DIMENSIONS.legRadius, 
            12,  // Radial segments for round legs
            false
        );
        
        const legMaterial = new THREE.MeshStandardMaterial({
            color: COLORS.legs,
            roughness: 0.3,
            metalness: 0.5,
            emissive: 0xFFFDF0,
            emissiveIntensity: 0.15
        });
        
        const leg = new THREE.Mesh(legGeometry, legMaterial);
        leg.castShadow = true;
        leg.receiveShadow = true;
        legGroup.add(leg);
    }
    
    // 3. Add cross-bracing between legs for architectural accuracy
    // This adds stability and visual interest
    for (let level = 1; level <= DIMENSIONS.bracingLevels; level++) {
        const levelHeight = (DIMENSIONS.legHeight * level) / (DIMENSIONS.bracingLevels + 1);
        const levelRadius = DIMENSIONS.legDistance * (1 - (level / (DIMENSIONS.bracingLevels + 1)) * 0.7);
        
        for (let i = 0; i < DIMENSIONS.numLegs; i++) {
            const startAngle = (i / DIMENSIONS.numLegs) * Math.PI * 2 + DIMENSIONS.legAngleOffset;
            const endAngle = ((i + 1) / DIMENSIONS.numLegs) * Math.PI * 2 + DIMENSIONS.legAngleOffset;
            
            const startPoint = new THREE.Vector3(
                Math.cos(startAngle) * levelRadius,
                DIMENSIONS.baseHeight + levelHeight,
                Math.sin(startAngle) * levelRadius
            );
            
            const endPoint = new THREE.Vector3(
                Math.cos(endAngle) * levelRadius,
                DIMENSIONS.baseHeight + levelHeight,
                Math.sin(endAngle) * levelRadius
            );
            
            // Create bracing tube
            const bracingCurve = new THREE.LineCurve3(startPoint, endPoint);
            const bracingGeometry = new THREE.TubeGeometry(
                bracingCurve,
                8,
                DIMENSIONS.bracingThickness,
                8,
                false
            );
            
            const bracingMaterial = new THREE.MeshStandardMaterial({
                color: COLORS.bracing,
                roughness: 0.4,
                metalness: 0.6,
                emissive: 0xFFFAF0,
                emissiveIntensity: 0.15
            });
            
            const bracing = new THREE.Mesh(bracingGeometry, bracingMaterial);
            bracing.castShadow = true;
            bracing.receiveShadow = true;
            legGroup.add(bracing);
        }
    }
    
    spaceNeedleGroup.add(legGroup);
    
    // 4. Create the main shaft (tapered cylinder)
    const shaftTopY = DIMENSIONS.baseHeight + DIMENSIONS.legHeight;
    const shaftGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.shaftRadius * DIMENSIONS.shaftTaper,
        DIMENSIONS.shaftRadius,
        DIMENSIONS.shaftHeight,
        24
    );
    const shaftMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.shaft,
        roughness: 0.3,
        metalness: 0.6,
        emissive: 0xFFFDF0,
        emissiveIntensity: 0.15
    });
    const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    shaft.position.y = shaftTopY + DIMENSIONS.shaftHeight / 2;
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    spaceNeedleGroup.add(shaft);
    
    // 5. Create the observation deck - most distinctive feature
    const deckY = shaftTopY + DIMENSIONS.shaftHeight;
    
    // Create the distinctive saucer shape
    const deckGroup = new THREE.Group();
    deckGroup.position.y = deckY;
    
    // Curved deck profile points
    const deckShape = [];
    
    // Create a detailed, architectural profile for the observation deck
    // Bottom edge points
    deckShape.push(new THREE.Vector2(DIMENSIONS.shaftRadius * 0.9, 0));
    deckShape.push(new THREE.Vector2(DIMENSIONS.deckLowerRadius * 0.7, 2));
    deckShape.push(new THREE.Vector2(DIMENSIONS.deckLowerRadius, 4));
    
    // Main body curve
    deckShape.push(new THREE.Vector2(DIMENSIONS.deckUpperRadius, DIMENSIONS.deckHeight * 0.4));
    deckShape.push(new THREE.Vector2(DIMENSIONS.deckUpperRadius * 0.97, DIMENSIONS.deckHeight * 0.7));
    deckShape.push(new THREE.Vector2(DIMENSIONS.deckUpperRadius * 0.85, DIMENSIONS.deckHeight * 0.9));
    
    // Top edge
    deckShape.push(new THREE.Vector2(DIMENSIONS.restaurantRadius, DIMENSIONS.deckHeight));
    
    // Inner surface
    deckShape.push(new THREE.Vector2(DIMENSIONS.shaftRadius * 0.95, DIMENSIONS.deckHeight));
    deckShape.push(new THREE.Vector2(DIMENSIONS.shaftRadius * 0.9, 0));
    
    // Create the deck using lathe geometry for smooth curves
    const deckGeometry = new THREE.LatheGeometry(
        deckShape,
        48,  // High segment count for smoother curve
        0,
        2 * Math.PI
    );
    
    const deckMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.deckBody,
        roughness: 0.2,
        metalness: 0.7,
        emissive: 0xFFFDF0,
        emissiveIntensity: 0.15
    });
    
    const deck = new THREE.Mesh(deckGeometry, deckMaterial);
    deck.castShadow = true;
    deck.receiveShadow = true;
    deckGroup.add(deck);
    
    // 6. Add orange colored edge band (iconic element)
    const edgeBandGeometry = new THREE.TorusGeometry(
        DIMENSIONS.deckUpperRadius,
        DIMENSIONS.deckEdgeThickness,
        16,
        96
    );
    
    const edgeBandMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.deckEdge,
        roughness: 0.3,
        metalness: 0.5,
        emissive: 0xFF4400,
        emissiveIntensity: 0.5  // Stronger glow for the orange part
    });
    
    const edgeBand = new THREE.Mesh(edgeBandGeometry, edgeBandMaterial);
    edgeBand.position.y = DIMENSIONS.deckHeight * 0.4;
    edgeBand.rotation.x = Math.PI / 2;
    edgeBand.castShadow = true;
    edgeBand.receiveShadow = true;
    deckGroup.add(edgeBand);
    
    // 7. Add windows around the observation deck
    const windowsGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.deckUpperRadius * 1.02,
        DIMENSIONS.deckUpperRadius * 1.02,
        DIMENSIONS.deckHeight * 0.5,
        48,
        1,
        true // Open-ended cylinder for visibility
    );
    
    const windowsMaterial = new THREE.MeshPhysicalMaterial({
        color: COLORS.deckWindows,
        roughness: 0.05,
        metalness: 0.1,
        transparent: true,
        opacity: 0.8,
        transmission: 0.5,
        ior: 1.5,
        emissive: COLORS.deckWindows,
        emissiveIntensity: 0.2
    });
    
    const windows = new THREE.Mesh(windowsGeometry, windowsMaterial);
    windows.position.y = DIMENSIONS.deckHeight * 0.45; // Position at the widest point
    windows.castShadow = false; // Windows shouldn't cast shadows
    windows.receiveShadow = true;
    deckGroup.add(windows);
    
    // 8. Add the restaurant level
    const restaurantGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.restaurantRadius,
        DIMENSIONS.restaurantRadius,
        DIMENSIONS.restaurantHeight,
        32
    );
    
    const restaurantMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.restaurant,
        roughness: 0.2,
        metalness: 0.7,
        emissive: 0xFFFDF0,
        emissiveIntensity: 0.15
    });
    
    const restaurant = new THREE.Mesh(restaurantGeometry, restaurantMaterial);
    restaurant.position.y = DIMENSIONS.deckHeight + DIMENSIONS.restaurantHeight / 2;
    restaurant.castShadow = true;
    restaurant.receiveShadow = true;
    deckGroup.add(restaurant);
    
    // 9. Add the top spire
    const spireGeometry = new THREE.CylinderGeometry(
        DIMENSIONS.spireTopRadius,
        DIMENSIONS.spireBottomRadius,
        DIMENSIONS.spireHeight,
        16
    );
    
    const spireMaterial = new THREE.MeshStandardMaterial({
        color: COLORS.spire,
        roughness: 0.1,
        metalness: 0.9,
        emissive: 0xFFFDF0,
        emissiveIntensity: 0.15
    });
    
    const spire = new THREE.Mesh(spireGeometry, spireMaterial);
    spire.position.y = DIMENSIONS.deckHeight + DIMENSIONS.restaurantHeight + DIMENSIONS.spireHeight / 2;
    spire.castShadow = true;
    spire.receiveShadow = true;
    deckGroup.add(spire);
    
    // Add the deck group to the main model
    spaceNeedleGroup.add(deckGroup);
    
    return spaceNeedleGroup;
}

/**
 * Places the architectural Space Needle at its real-world coordinates in the game world
 * @param {THREE.Scene} scene - The Three.js scene to add the Space Needle to
 * @returns {SpaceNeedle} The Space Needle instance with health tracking
 */
export function addSpaceNeedleToScene(scene: THREE.Scene): SpaceNeedle {
    console.log("Adding improved architectural Space Needle (Version 1) to scene");
    
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