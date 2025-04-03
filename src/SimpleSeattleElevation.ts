/**
 * SimpleSeattleElevation.ts
 * 
 * A simplified approach to rendering Seattle's terrain based on elevation data.
 * Instead of parsing complex GIS files, this uses a simplified grid with known elevation points.
 */

import * as THREE from 'three';
import { projectToGameCoords, setProjectionCenter } from './coordinateUtils';

// Reference coordinates for Seattle
const SEATTLE_REFERENCE = {
  latitude: 47.6062,
  longitude: -122.3321
};

// Define major landmarks with their coordinates and elevations
const LANDMARKS = [
  { name: "Space Needle", lat: 47.6205, lng: -122.3493, elevation: 158 }, // Base elevation ~158m
  { name: "Downtown", lat: 47.6062, lng: -122.3321, elevation: 52 },     // Average elevation ~52m
  { name: "Capitol Hill", lat: 47.6253, lng: -122.3222, elevation: 125 }, // One of the highest points
  { name: "Lake Union", lat: 47.6392, lng: -122.3337, elevation: 0 },    // Water - 0m
  { name: "Queen Anne", lat: 47.6370, lng: -122.3570, elevation: 160 },  // Queen Anne Hill
  { name: "Alki Beach", lat: 47.5860, lng: -122.4110, elevation: 0 },    // Water - 0m
  { name: "Elliot Bay", lat: 47.5990, lng: -122.3800, elevation: 0 },    // Water - 0m
  { name: "Lake Washington", lat: 47.6090, lng: -122.2550, elevation: 0 }, // Water - 0m
  { name: "Puget Sound", lat: 47.7237, lng: -122.4713, elevation: 0 },    // Water - 0m
  { name: "Magnolia", lat: 47.6510, lng: -122.3998, elevation: 120 },    // Magnolia Bluff
  { name: "Ballard", lat: 47.6735, lng: -122.3850, elevation: 40 },     // Ballard area
  { name: "Fremont", lat: 47.6510, lng: -122.3500, elevation: 30 },     // Fremont area
  { name: "West Seattle", lat: 47.5740, lng: -122.3870, elevation: 80 }, // West Seattle hill
  { name: "Mount Baker", lat: 47.5800, lng: -122.3000, elevation: 150 }  // Mount Baker neighborhood
];

// Seattle terrain bounds
const BOUNDS = {
  minLat: 47.5000,
  maxLat: 47.7500,
  minLng: -122.5000,
  maxLng: -122.2500,
};

// Grid resolution for the terrain
const GRID_SIZE = 100; // 100x100 grid

/**
 * Creates a simplified elevation map of Seattle.
 * @param scene The THREE.js scene
 */
export function createSimpleSeattleTerrain(scene: THREE.Scene): void {
  console.log("Creating simplified Seattle terrain based on elevation data...");
  
  // Set projection center for coordinate transformations
  setProjectionCenter(
    BOUNDS.minLng, BOUNDS.maxLng,
    BOUNDS.minLat, BOUNDS.maxLat
  );
  
  // Create materials
  const waterMaterial = new THREE.MeshStandardMaterial({
    color: 0x00AAFF,  // Bright blue for water
    metalness: 0.3,
    roughness: 0.1,
    transparent: false, // No transparency for maximum visibility
    opacity: 1.0,
    side: THREE.DoubleSide, // Render both sides
    emissive: 0x0044FF,
    emissiveIntensity: 0.2
  });
  
  const landMaterial = new THREE.MeshStandardMaterial({
    color: 0x228B22, // Forest green for land
    metalness: 0.0,
    roughness: 0.8
  });
  
  // Create a heightmap grid
  const heightMap = createHeightMap(GRID_SIZE);
  
  // Create terrain geometry
  const baseSize = 8000; // Large enough to cover the area
  const terrainGeometry = new THREE.PlaneGeometry(
    baseSize * 0.8, // Slightly smaller than water base
    baseSize * 0.8, 
    GRID_SIZE - 1, 
    GRID_SIZE - 1
  );
  terrainGeometry.rotateX(-Math.PI / 2); // Rotate to be horizontal
  
  // Apply the height map to the terrain vertices
  const vertices = terrainGeometry.attributes.position.array as Float32Array;
  const halfSize = baseSize * 0.4; // Half of the terrain size
  
  // Keep track of max elevation for debugging
  let maxElevation = 0;
  
  // Process the vertices for land and water separately
  for (let i = 0; i < vertices.length; i += 3) {
    // Calculate grid position (0 to GRID_SIZE-1)
    const x = Math.floor((vertices[i] + halfSize) / (baseSize * 0.8) * GRID_SIZE);
    const z = Math.floor((vertices[i+2] + halfSize) / (baseSize * 0.8) * GRID_SIZE);
    
    // Get the elevation at this grid position
    const elevation = getElevationAt(x, z, heightMap);
    maxElevation = Math.max(maxElevation, elevation);
    
    // Apply height (y-coordinate) - increase the scale factor for more dramatic hills
    vertices[i+1] = elevation * 20; // Increased from 15 to 20 for more dramatic effect
  }
  
  console.log(`Terrain created with max elevation: ${maxElevation * 20} units`);
  
  // Update the geometry
  terrainGeometry.attributes.position.needsUpdate = true;
  terrainGeometry.computeVertexNormals();
  
  // Create the terrain mesh with the land material
  const terrain = new THREE.Mesh(terrainGeometry, landMaterial);
  terrain.position.y = 0; // At base level
  scene.add(terrain);
  
  // Create a separate MASSIVE water plane
  // This is positioned ABOVE everything else to ensure it's highly visible
  const waterGeometry = new THREE.PlaneGeometry(baseSize * 1.2, baseSize * 1.2);
  waterGeometry.rotateX(-Math.PI / 2);
  const waterPlane = new THREE.Mesh(waterGeometry, waterMaterial);
  waterPlane.position.y = -5; // Lower than terrain but still visible
  scene.add(waterPlane);
  console.log("Added MASSIVE water plane at y=-5");
  
  // Add a wireframe helper to see the terrain structure
  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    wireframe: true,
    transparent: true,
    opacity: 0.1
  });
  const wireframe = new THREE.Mesh(terrainGeometry.clone(), wireframeMaterial);
  wireframe.position.copy(terrain.position);
  scene.add(wireframe);
  
  // Add water areas based on landmarks - now with super visible settings
  addWaterBodies(scene, heightMap, baseSize);
  
  // Add markers for landmarks with increased size
  addLandmarkMarkers(scene);
  
  console.log("Seattle terrain created successfully.");
}

/**
 * Creates a height map grid based on the landmark data.
 * @param gridSize The size of the grid (gridSize x gridSize)
 * @returns A 2D array of elevation values
 */
function createHeightMap(gridSize: number): number[][] {
  // Initialize grid with zeros (water level)
  const grid: number[][] = [];
  for (let x = 0; x < gridSize; x++) {
    grid[x] = [];
    for (let z = 0; z < gridSize; z++) {
      grid[x][z] = 0; // Default to water level
    }
  }
  
  // For each landmark, calculate its position in the grid and set elevation
  for (const landmark of LANDMARKS) {
    // Calculate normalized position in the terrain bounds (0 to 1)
    const normalizedX = (landmark.lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng);
    const normalizedZ = (landmark.lat - BOUNDS.minLat) / (BOUNDS.maxLat - BOUNDS.minLat);
    
    // Convert to grid coordinates
    const gridX = Math.floor(normalizedX * (gridSize - 1));
    const gridZ = Math.floor(normalizedZ * (gridSize - 1));
    
    // Ensure within bounds
    if (gridX >= 0 && gridX < gridSize && gridZ >= 0 && gridZ < gridSize) {
      grid[gridX][gridZ] = landmark.elevation;
      
      // Create a small "hill" around each landmark for smoother terrain
      const radius = 5; // Influence radius in grid cells
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          const x = gridX + dx;
          const z = gridZ + dz;
          
          if (x >= 0 && x < gridSize && z >= 0 && z < gridSize) {
            // Calculate distance from landmark
            const distance = Math.sqrt(dx*dx + dz*dz);
            if (distance <= radius) {
              // Linear falloff of elevation
              const falloff = 1 - (distance / radius);
              const elevation = landmark.elevation * falloff;
              
              // Only set if higher than existing elevation (for overlapping influences)
              if (elevation > grid[x][z]) {
                grid[x][z] = elevation;
              }
            }
          }
        }
      }
    }
  }
  
  // Apply a simple smoothing pass
  smoothHeightMap(grid, gridSize);
  
  return grid;
}

/**
 * Applies smoothing to the height map to create more natural terrain.
 * @param grid The height map grid to smooth
 * @param gridSize The size of the grid
 */
function smoothHeightMap(grid: number[][], gridSize: number): void {
  const tempGrid = JSON.parse(JSON.stringify(grid)); // Deep copy
  
  // Simple box blur
  for (let x = 1; x < gridSize - 1; x++) {
    for (let z = 1; z < gridSize - 1; z++) {
      // Average of surrounding cells
      let sum = 0;
      for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
          sum += grid[x + dx][z + dz];
        }
      }
      tempGrid[x][z] = sum / 9; // Average of 9 cells
    }
  }
  
  // Copy back to original grid
  for (let x = 1; x < gridSize - 1; x++) {
    for (let z = 1; z < gridSize - 1; z++) {
      grid[x][z] = tempGrid[x][z];
    }
  }
}

/**
 * Gets interpolated elevation at a specific grid position.
 * @param x X coordinate in the grid
 * @param z Z coordinate in the grid
 * @param heightMap The height map grid
 * @returns The interpolated elevation value
 */
function getElevationAt(x: number, z: number, heightMap: number[][]): number {
  const gridSize = heightMap.length;
  
  // Clamp coordinates to grid bounds
  const clampedX = Math.max(0, Math.min(gridSize - 1, x));
  const clampedZ = Math.max(0, Math.min(gridSize - 1, z));
  
  // Get grid cell
  const gridX = Math.floor(clampedX);
  const gridZ = Math.floor(clampedZ);
  
  // Bilinear interpolation
  if (gridX < gridSize - 1 && gridZ < gridSize - 1) {
    const fracX = clampedX - gridX;
    const fracZ = clampedZ - gridZ;
    
    const v1 = heightMap[gridX][gridZ];
    const v2 = heightMap[gridX+1][gridZ];
    const v3 = heightMap[gridX][gridZ+1];
    const v4 = heightMap[gridX+1][gridZ+1];
    
    // Interpolate along x
    const i1 = v1 * (1 - fracX) + v2 * fracX;
    const i2 = v3 * (1 - fracX) + v4 * fracX;
    
    // Interpolate along z
    return i1 * (1 - fracZ) + i2 * fracZ;
  } else {
    // Fallback to nearest point
    return heightMap[gridX][gridZ];
  }
}

/**
 * Adds visual markers for the major landmarks.
 * @param scene The THREE.js scene
 */
function addLandmarkMarkers(scene: THREE.Scene): void {
  console.log("Adding landmark markers:");
  
  for (const landmark of LANDMARKS) {
    // Skip water landmarks
    if (landmark.elevation <= 0) continue;
    
    // Project geographic coordinates to game coordinates
    const [x, z] = projectToGameCoords(landmark.lng, landmark.lat);
    
    console.log(`Placing marker for ${landmark.name} at (${x.toFixed(0)}, ${z.toFixed(0)}) with elevation ${landmark.elevation}`);
    
    // Create a much larger marker
    const markerGeometry = new THREE.CylinderGeometry(30, 30, 50, 8);
    const markerMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xff4500, // Orange-red for landmarks 
      emissive: 0xff2000,
      emissiveIntensity: 0.5
    });
    
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    
    // Position higher above the terrain
    marker.position.set(x, landmark.elevation * 10 + 50, z); // Position higher above terrain
    scene.add(marker);
    
    // Add a pole connecting to ground for better visibility
    const poleGeometry = new THREE.CylinderGeometry(5, 5, landmark.elevation * 10 + 50, 8);
    const poleMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x888888
    });
    
    const pole = new THREE.Mesh(poleGeometry, poleMaterial);
    pole.position.set(x, (landmark.elevation * 10 + 50) / 2, z); // Center of pole
    scene.add(pole);
  }
}

/**
 * Creates water bodies at the locations of water landmarks.
 * @param scene The THREE.js scene
 * @param heightMap The height map grid
 * @param baseSize The size of the base terrain
 */
function addWaterBodies(scene: THREE.Scene, heightMap: number[][], baseSize: number): void {
  console.log("Adding very visible water bodies...");

  // Use a very bright, distinctive blue for water
  const waterMaterial = new THREE.MeshStandardMaterial({
    color: 0x00AAFF,  // Very bright blue for water bodies
    metalness: 0.3,
    roughness: 0.1,
    transparent: false, // No transparency for maximum visibility
    opacity: 1.0,
    side: THREE.DoubleSide // Render both sides
  });

  // Create one large water plane at a fixed height ABOVE terrain
  const largeWaterPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(baseSize * 1.5, baseSize * 1.5),
    waterMaterial
  );
  largeWaterPlane.rotation.x = -Math.PI / 2; // Make horizontal
  largeWaterPlane.position.y = 5; // Position above terrain
  scene.add(largeWaterPlane);
  console.log("Added large water plane at y=5");
  
  // For each water landmark, create a very distinctive water body
  for (const landmark of LANDMARKS) {
    if (landmark.elevation > 0) continue; // Skip non-water landmarks
    
    // Project geographic coordinates to game coordinates
    const [x, z] = projectToGameCoords(landmark.lng, landmark.lat);
    
    console.log(`Creating HIGHLY VISIBLE water body for ${landmark.name} at (${x.toFixed(0)}, ${z.toFixed(0)})`);
    
    // Create a much larger circular water body
    let waterSize = 1200; // 2x larger than before
    
    // Adjust size based on which water body it is
    if (landmark.name.includes("Lake Washington")) {
      waterSize = 2000;
    } else if (landmark.name.includes("Puget Sound")) {
      waterSize = 2400;
    } else if (landmark.name.includes("Lake Union")) {
      waterSize = 1000;
    } else if (landmark.name.includes("Elliot Bay")) {
      waterSize = 1600;
    }
    
    // Create a distinctive water body marker
    const waterGeometry = new THREE.CylinderGeometry(waterSize, waterSize, 10, 32);
    const distinctWaterMaterial = new THREE.MeshStandardMaterial({
      color: 0x0088FF,
      emissive: 0x0044FF,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.9
    });
    
    const waterMarker = new THREE.Mesh(waterGeometry, distinctWaterMaterial);
    waterMarker.position.set(x, 10, z); // Positioned high above terrain
    waterMarker.rotation.x = Math.PI / 2; // Make it a flat disc
    scene.add(waterMarker);
    
    // Add text to label the water body (would need HTML or sprite implementation)
  }
} 