/**
 * StylizedBuildings.ts
 * 
 * Implements a performant, stylized building system for Seattle using instanced meshes.
 * This approach drastically reduces draw calls while maintaining the visual feel of the city.
 * 
 * Features:
 * - Uses THREE.InstancedMesh for efficient rendering
 * - Creates district-based building styles
 * - Implements simplified window textures
 * - Respects terrain elevation
 */

import * as THREE from 'three';
import { getTerrainElevation } from './SeattleElevationGrid';
import { projectToGameCoords } from './coordinateUtils';

// Define districts for building placement
interface District {
    name: string;
    center: [number, number]; // [lng, lat]
    radius: number;           // game units
    maxHeight: number;        // max building height
    minHeight: number;        // min building height
    density: number;          // 0-1 value for building density
    color: number;            // primary color for buildings
}

// Seattle districts with their characteristics
const DISTRICTS: District[] = [
    {
        name: "Downtown", 
        center: [-122.333, 47.607],
        radius: 1200,
        maxHeight: 120,
        minHeight: 30,
        density: 0.8,
        color: 0x505050 // Darker gray for downtown skyscrapers
    },
    {
        name: "Space Needle Area",
        center: [-122.349, 47.623],
        radius: 500,
        maxHeight: 55, // Keep buildings much shorter than Space Needle
        minHeight: 30,
        density: 0.7,
        color: 0x606060 // Medium gray
    },
    {
        name: "Capitol Hill",
        center: [-122.322, 47.625],
        radius: 800,
        maxHeight: 40,
        minHeight: 10,
        density: 0.6,
        color: 0x656565 // Slightly different gray
    },
    {
        name: "Residential Areas",
        center: [-122.35, 47.65], // Generic center for surrounding areas
        radius: 3000, // Large radius to cover remaining areas
        maxHeight: 20,
        minHeight: 5,
        density: 0.4,
        color: 0x707070 // Lighter gray for residential buildings
    }
];

// Building type definitions for creating variety
interface BuildingType {
    width: number;
    depth: number;
    heightFactor: number; // Multiplier for district height
    windowSize: number;   // Size of windows (0-1)
    windowSpacing: number; // Spacing between windows (0-1)
    color: number;        // Color adjustment from district color
}

// Define a few building types for variety
const BUILDING_TYPES: BuildingType[] = [
    { width: 30, depth: 30, heightFactor: 1.0, windowSize: 0.7, windowSpacing: 0.3, color: 0 },       // Square tower
    { width: 40, depth: 20, heightFactor: 0.8, windowSize: 0.6, windowSpacing: 0.4, color: 0x111111 }, // Wide rectangle
    { width: 20, depth: 40, heightFactor: 0.9, windowSize: 0.8, windowSpacing: 0.2, color: 0x222222 }, // Narrow rectangle
    { width: 25, depth: 25, heightFactor: 0.7, windowSize: 0.5, windowSpacing: 0.5, color: 0x333333 }, // Small square
    { width: 50, depth: 50, heightFactor: 1.2, windowSize: 0.4, windowSpacing: 0.6, color: 0x444444 }  // Large square
];

// Track created instances for debugging and cleanup
interface BuildingTracker {
    instances: THREE.InstancedMesh;
    count: number;
    maxInstances: number;
}

/**
 * Creates a stylized window texture for buildings
 * @param color Base color for the building
 * @param windowSize Size of windows (0-1)
 * @param spacing Spacing between windows (0-1)
 * @returns Canvas texture for building windows
 */
function createStylizedWindowTexture(color: number, windowSize: number, spacing: number): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    canvas.width = 256;
    canvas.height = 256;

    // Base building color (from parameter)
    context.fillStyle = '#' + color.toString(16).padStart(6, '0');
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Calculate window parameters
    const windowWidth = Math.max(10, Math.floor(60 * windowSize));
    const windowHeight = Math.max(15, Math.floor(80 * windowSize));
    const gap = Math.max(10, Math.floor(40 * spacing));

    // Add windows in a grid pattern
    for (let y = gap; y < canvas.height - windowHeight; y += windowHeight + gap) {
        for (let x = gap; x < canvas.width - windowWidth; x += windowWidth + gap) {
            // Randomly light up some windows (20% chance)
            if (Math.random() > 0.8) {
                context.fillStyle = '#ffff88'; // Yellow light
            } else {
                context.fillStyle = '#222222'; // Dark window
            }
            
            context.fillRect(x, y, windowWidth, windowHeight);
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
}

/**
 * Finds the district for a given position
 * @param x X coordinate in game space
 * @param z Z coordinate in game space
 * @returns The matching district or the default residential district
 */
function findDistrictForPosition(x: number, z: number): District {
    // Convert districts' centers to game coordinates
    const districtsWithGameCoords = DISTRICTS.map(district => {
        const [centerX, centerZ] = projectToGameCoords(district.center[0], district.center[1]);
        return {
            ...district,
            gameCenter: [centerX, centerZ]
        };
    });

    // Find the district that contains this position
    for (const district of districtsWithGameCoords) {
        const dx = x - district.gameCenter[0];
        const dz = z - district.gameCenter[1];
        const distanceSq = dx * dx + dz * dz;
        
        if (distanceSq <= district.radius * district.radius) {
            return district;
        }
    }

    // Default to residential district if no match
    return DISTRICTS[3]; // Residential area is the last in the array
}

/**
 * Creates stylized buildings using instanced meshes for performance
 * @param scene The THREE.js scene to add buildings to
 * @param maxBuildingsPerType Maximum instances per building type
 * @returns Array of created building instances for reference
 */
export function createStylizedBuildings(
    scene: THREE.Scene, 
    maxBuildingsPerType: number = 1000
): BuildingTracker[] {
    console.log("Creating stylized buildings with instanced meshes...");
    
    // Convert districts' centers to game coordinates for logging
    console.log("Districts:");
    DISTRICTS.forEach(district => {
        const [centerX, centerZ] = projectToGameCoords(district.center[0], district.center[1]);
        console.log(`${district.name}: centered at (${centerX}, ${centerZ}), radius ${district.radius}`);
    });
    
    // Create instanced meshes for each building type
    const buildingTrackers: BuildingTracker[] = [];
    const materials: THREE.MeshPhongMaterial[] = [];
    
    // Initialize instanced meshes for each building type
    BUILDING_TYPES.forEach((buildingType, typeIndex) => {
        // Create geometry
        const geometry = new THREE.BoxGeometry(
            buildingType.width, 
            1, // Height will be scaled by matrix
            buildingType.depth
        );
        
        // Calculate color (combine district and building type colors)
        const baseColor = new THREE.Color(buildingType.color);
        
        // Create materials array for box
        const sideMaterial = new THREE.MeshPhongMaterial({ 
            map: createStylizedWindowTexture(
                buildingType.color || 0x555555,
                buildingType.windowSize,
                buildingType.windowSpacing
            )
        });
        const roofMaterial = new THREE.MeshPhongMaterial({ 
            color: buildingType.color || 0x444444,
            shininess: 10
        });
        
        // Array of materials: [right, left, top, bottom, front, back]
        const buildingMaterials = [
            sideMaterial, sideMaterial, roofMaterial, roofMaterial, sideMaterial, sideMaterial
        ];
        
        // Create instances for each district
        DISTRICTS.forEach(district => {
            // Create instanced mesh
            const instances = new THREE.InstancedMesh(
                geometry,
                buildingMaterials,
                maxBuildingsPerType
            );
            
            instances.castShadow = true;
            instances.receiveShadow = true;
            scene.add(instances);
            
            // Store in tracker
            buildingTrackers.push({
                instances,
                count: 0,
                maxInstances: maxBuildingsPerType
            });
        });
    });
    
    // Distribution parameters
    const placementAreaHalfSize = 3500; // Same as original
    const numberOfPlacementAttempts = 5000; // Reduced from 20,000
    const buildingCheckRadius = 8; // Minimum distance between buildings
    
    // Track placed buildings for overlap checking
    const buildingPositions: THREE.Vector2[] = [];
    
    // Build matrix for instance transforms
    const matrix = new THREE.Matrix4();
    const placedBuildingCount = { total: 0 };
    
    console.log(`Attempting to place buildings (${numberOfPlacementAttempts} attempts)...`);
    
    // Start placing buildings
    for (let i = 0; i < numberOfPlacementAttempts; i++) {
        // Generate random position within placement area
        const potentialX = (Math.random() - 0.5) * 2 * placementAreaHalfSize;
        const potentialZ = (Math.random() - 0.5) * 2 * placementAreaHalfSize;
        
        // Find district for this position
        const district = findDistrictForPosition(potentialX, potentialZ);
        
        // Apply district density as placement probability
        if (Math.random() > district.density) {
            continue; // Skip based on district density
        }
        
        // Check for overlap with existing buildings
        let tooClose = false;
        for (const pos of buildingPositions) {
            const distSq = Math.pow(potentialX - pos.x, 2) + Math.pow(potentialZ - pos.y, 2);
            if (distSq < buildingCheckRadius * buildingCheckRadius) {
                tooClose = true;
                break;
            }
        }
        if (tooClose) continue;
        
        // Check terrain height (skip if underwater)
        const terrainY = getTerrainElevation(potentialX, potentialZ);
        if (terrainY <= 0.5) {
            continue; // Skip placing building in water
        }
        
        // Choose random building type with weighted selection toward district-appropriate types
        const buildingTypeIndex = Math.floor(Math.random() * BUILDING_TYPES.length);
        const buildingType = BUILDING_TYPES[buildingTypeIndex];
        
        // Calculate building height based on district and some randomness
        const districtIndex = DISTRICTS.indexOf(district);
        const minHeight = district.minHeight;
        const maxHeight = district.maxHeight;
        const height = minHeight + (Math.random() * (maxHeight - minHeight)) * buildingType.heightFactor;

        // Find tracker for this building type and district
        const tracker = buildingTrackers[buildingTypeIndex * DISTRICTS.length + districtIndex];
        
        // Place building if we haven't exceeded maximum instances
        if (tracker.count < tracker.maxInstances) {
            // Set instance matrix
            matrix.makeScale(1, height, 1); // Scale Y to actual height
            matrix.setPosition(potentialX, terrainY + height / 2, potentialZ); // Position at correct height
            
            // Apply matrix to instance
            tracker.instances.setMatrixAt(tracker.count, matrix);
            tracker.count++;
            placedBuildingCount.total++;
            
            // Store position for overlap checking
            buildingPositions.push(new THREE.Vector2(potentialX, potentialZ));
        }
    }
    
    // Update instance matrices
    buildingTrackers.forEach(tracker => {
        if (tracker.count > 0) {
            tracker.instances.instanceMatrix.needsUpdate = true;
            tracker.instances.count = tracker.count; // Set actual count of instances
        }
    });
    
    console.log(`Successfully placed ${placedBuildingCount.total} buildings using instanced rendering.`);
    return buildingTrackers;
} 