/**
 * SeattleElevationGrid.ts
 * 
 * Implements a terrain generator using pre-processed elevation grid data
 * for the Seattle area from USGS elevation data.
 */

import * as THREE from 'three';
import { projectToGameCoords, setProjectionCenter, setTerrainSize } from './coordinateUtils';
import { initTerrainInfoDisplay } from './TerrainInfoDisplay';
// Comment out road renderer import as it's no longer needed
// import { loadAndRenderSeattleRoads } from './SeattleRoadsRenderer';

// Type definitions for the elevation grid data
interface ElevationMetadata {
  size: number;
  resolution: number;
  seattleBounds?: {
    minLat: number;
    maxLat: number;
    minLng: number;
    maxLng: number;
  };
  window?: number[];
  geographicBounds: {
    minLon: number;
    maxLon: number;
    minLat: number;
    maxLat: number;
  };
  elevation: {
    min: number;
    max: number;
    average: number | null;
  };
  created: string;
}

interface ElevationData {
  metadata: ElevationMetadata;
  grid: number[][];
}

// Landmark definitions for reference points
const LANDMARKS = [
  { name: "Space Needle", lat: 47.6205, lng: -122.3493 },
  { name: "Downtown", lat: 47.6062, lng: -122.3321 },
  { name: "Capitol Hill", lat: 47.6253, lng: -122.3222 },
  { name: "Lake Union", lat: 47.6392, lng: -122.3337 },
  { name: "Queen Anne", lat: 47.6370, lng: -122.3570 },
  { name: "Alki Beach", lat: 47.5860, lng: -122.4110 },
  { name: "Elliot Bay", lat: 47.5990, lng: -122.3800 },
  { name: "Lake Washington", lat: 47.6090, lng: -122.2550 },
  { name: "Puget Sound", lat: 47.7237, lng: -122.4713 },
  { name: "Magnolia", lat: 47.6510, lng: -122.3998 },
  { name: "Ballard", lat: 47.6735, lng: -122.3850 },
  { name: "Fremont", lat: 47.6510, lng: -122.3500 },
  { name: "West Seattle", lat: 47.5740, lng: -122.3870 },
  { name: "Mount Baker", lat: 47.5800, lng: -122.3000 }
];

// Water bodies - used to identify areas that should be at water level
const WATER_BODIES = [
  { name: "Puget Sound", lat: 47.7237, lng: -122.4713, radius: 2400 },
  { name: "Elliot Bay", lat: 47.5990, lng: -122.3800, radius: 1600 },
  { name: "Lake Union", lat: 47.6392, lng: -122.3337, radius: 1000 },
  { name: "Lake Washington", lat: 47.6090, lng: -122.2550, radius: 2000 },
  { name: "Alki Beach", lat: 47.5860, lng: -122.4110, radius: 1200 }
];

// Seattle bounds for reference
const SEATTLE_BOUNDS = {
  minLat: 47.5000,
  maxLat: 47.7500,
  minLng: -122.5000,
  maxLng: -122.2500,
};

// Configuration constants
const ELEVATION_SCALE = 1; // No vertical exaggeration (true 1:1 scale)
// Set water level based on observation of data (lowest is ~0.14, known water spots up to 0.5)
const WATER_LEVEL = 0.5; 
// Height to set terrain vertices that are underwater - needs to be precise for material index check
const UNDERWATER_VERTEX_HEIGHT = WATER_LEVEL - 0.01; 
const TERRAIN_OFFSET = 0.5; // Small offset to prevent z-fighting for land vertices slightly above water - NO LONGER USED
const GRID_SIZE = 100; // Size of grid to use for rendering
const WATER_HEIGHT = 1; // Single water plane with minimal height - DEPRECATED, we use WATER_LEVEL now
const TERRAIN_BASE_SIZE = 8000; // Size of the terrain plane

// Cached data
let elevationData: ElevationData | null = null;

/**
 * Loads the elevation grid data from the JSON file
 * @returns Promise resolving to the elevation data
 */
async function loadElevationData(): Promise<ElevationData> {
  if (elevationData !== null) {
    return elevationData; // Return cached data if available
  }

  try {
    console.log("Loading Seattle elevation grid data...");
    const response = await fetch('./src/seattle_elevation_grid.json');
    if (!response.ok) {
      throw new Error(`Failed to load elevation data: ${response.statusText}`);
    }
    
    const data = await response.json() as ElevationData;
    elevationData = data;
    
    console.log("Seattle elevation grid loaded successfully:", 
      `Size: ${data.metadata.size}x${data.metadata.size}`,
      `Elevation range: ${data.metadata.elevation.min}m to ${data.metadata.elevation.max}m`,
      `Geographic bounds: ${JSON.stringify(data.metadata.geographicBounds)}`
    );
    
    return data;
  } catch (error) {
    console.error("Error loading Seattle elevation grid data:", error);
    throw error;
  }
}

/**
 * Creates a Seattle terrain mesh based on the grid elevation data
 * @param scene The THREE.js scene to add the terrain to
 */
export async function createSeattleTerrainFromGrid(scene: THREE.Scene): Promise<void> {
  console.log("Creating Seattle terrain from elevation grid data...");
  
  try {
    // Load the elevation data
    const data = await loadElevationData();
    
    // Use the geographic bounds from the data file to set the projection center
    const geoBounds = data.metadata.geographicBounds;
    
    console.log("Setting projection center with bounds:", geoBounds);
    
    // First set the terrain size for proper scaling calculation
    setTerrainSize(TERRAIN_BASE_SIZE);
    
    // Then set the projection center using the actual geographic bounds from the data
    setProjectionCenter(
      geoBounds.minLon, geoBounds.maxLon,
      geoBounds.minLat, geoBounds.maxLat
    );
    
    // Create materials
    // Water material for the dedicated water plane
    const waterSurfaceMaterial = new THREE.MeshStandardMaterial({
      color: 0x0066cc, // A nice blue for the water surface
      metalness: 0.1,
      roughness: 0.2,
      transparent: true, 
      opacity: 0.9, // Slightly less transparent
      side: THREE.DoubleSide, // Render both sides
    });
    
    const landMaterial = new THREE.MeshStandardMaterial({
      color: 0x228B22, // Forest green for land
      metalness: 0.0,
      roughness: 0.8
    });
    
    // Create terrain geometry
    const terrainGeometry = new THREE.PlaneGeometry(
      TERRAIN_BASE_SIZE * 0.8, // Slightly smaller to leave margin
      TERRAIN_BASE_SIZE * 0.8,
      GRID_SIZE - 1,
      GRID_SIZE - 1
    );
    terrainGeometry.rotateX(-Math.PI / 2); // Rotate to be horizontal
    
    // Generate water map based on Seattle water bodies - // NOTE: This map isn't currently used for geometry modification
    const waterMap = createWaterMap(GRID_SIZE);
    
    // Apply elevation data to vertices
    const vertices = terrainGeometry.attributes.position.array as Float32Array;
    const halfSize = TERRAIN_BASE_SIZE * 0.4;
    let maxElevation = 0;
    let minElevation = Infinity;
    
    // Get the data size for sampling
    const dataSize = data.metadata.size;
    const grid = data.grid;
    
    // Process each vertex
    for (let i = 0; i < vertices.length; i += 3) {
      // Calculate normalized position in the terrain plane (0 to 1)
      const normalizedX = (vertices[i] + halfSize) / (TERRAIN_BASE_SIZE * 0.8);
      const normalizedZ = (vertices[i+2] + halfSize) / (TERRAIN_BASE_SIZE * 0.8);
      
      // Map to grid indices in our elevation data
      const gridX = Math.floor(normalizedX * dataSize);
      const gridZ = Math.floor(normalizedZ * dataSize);
      
      // Get elevation from the grid with bounds checking
      let elevation = 0;
      
      // Check for vertices within water areas
      const vertexGridX = Math.floor(normalizedX * GRID_SIZE);
      const vertexGridZ = Math.floor(normalizedZ * GRID_SIZE);
      const isWaterPoint = vertexGridZ >= 0 && vertexGridZ < GRID_SIZE && 
                         vertexGridX >= 0 && vertexGridX < GRID_SIZE && 
                         waterMap[vertexGridZ][vertexGridX];
      
      // For water removal, we'll use the actual elevation data for all points
      if (gridX >= 0 && gridX < dataSize && gridZ >= 0 && gridZ < dataSize) {
        // For safety, check if the grid has data at this position
        if (grid[gridZ] && typeof grid[gridZ][gridX] === 'number') {
          elevation = grid[gridZ][gridX];
          
          // If elevation is NaN, treat it as water level
          if (isNaN(elevation)) {
            elevation = WATER_LEVEL; // Use WATER_LEVEL as default for NaN
          } 
        } else {
           // If no data exists for this point, assume water level
           elevation = WATER_LEVEL;
        }
      } else {
         // If outside grid bounds, assume water level
         elevation = WATER_LEVEL;
      }
      
      // Apply elevation with scaling and clamp underwater vertices
      if (elevation <= WATER_LEVEL) {
         // If elevation is at or below water level, set vertex slightly below water plane
         vertices[i+1] = UNDERWATER_VERTEX_HEIGHT; 
      } else {
         // Otherwise, set vertex height based on elevation data, adding small offset
         // Only add offset if slightly above water to prevent z-fighting with water plane
         // const offset = (elevation > WATER_LEVEL && elevation < WATER_LEVEL + TERRAIN_OFFSET * 2) ? TERRAIN_OFFSET : 0;
         // vertices[i+1] = (elevation * ELEVATION_SCALE) + offset; 
         
         // Simpler: Just use the scaled elevation for land vertices
         vertices[i+1] = elevation * ELEVATION_SCALE;
      }
      
      // Track min/max for debugging (using original elevation before clamping)
      maxElevation = Math.max(maxElevation, elevation);
      minElevation = Math.min(minElevation, elevation);
    }
    
    console.log(`Terrain elevation range (data): ${minElevation}m to ${maxElevation}m`);
    console.log(`Water level set at: ${WATER_LEVEL}m`);
    console.log(`Underwater vertices set to: ${UNDERWATER_VERTEX_HEIGHT}m`);
    
    // Update geometry position attribute
    terrainGeometry.attributes.position.needsUpdate = true;
    terrainGeometry.computeVertexNormals(); // Compute normals after height modification

    // --- Assign Material Groups based on Water Level ---
    terrainGeometry.clearGroups(); // Clear any existing groups
    
    // Check if the geometry is indexed before proceeding
    if (terrainGeometry.index) {
        const indices = terrainGeometry.index.array;
        const positions = terrainGeometry.attributes.position.array;
        const faceCount = indices.length / 3;
        let currentMaterialIndex = -1; 
        let groupStart = 0;

        console.log(`Assigning material groups to ${faceCount} faces...`);

        for (let i = 0; i < faceCount; i++) {
            const faceIndex = i * 3;
            const i0 = indices[faceIndex];
            const i1 = indices[faceIndex + 1];
            const i2 = indices[faceIndex + 2];

            const y0 = positions[i0 * 3 + 1];
            const y1 = positions[i1 * 3 + 1];
            const y2 = positions[i2 * 3 + 1];

            // Check if all vertices of the face are at the precise underwater height
            // Use a small epsilon for floating point comparison
            const epsilon = 0.001;
            // --- Check for Sea Level Water ONLY ---
            const isWaterFace = 
                Math.abs(y0 - UNDERWATER_VERTEX_HEIGHT) < epsilon &&
                Math.abs(y1 - UNDERWATER_VERTEX_HEIGHT) < epsilon &&
                Math.abs(y2 - UNDERWATER_VERTEX_HEIGHT) < epsilon;

            const faceMaterialIndex = isWaterFace ? 1 : 0; // 0 = land, 1 = water

            // Start the first group or a new group if material changes
            if (i === 0) {
                currentMaterialIndex = faceMaterialIndex;
            } else if (faceMaterialIndex !== currentMaterialIndex) {
                // Add the completed group
                terrainGeometry.addGroup(groupStart, faceIndex - groupStart, currentMaterialIndex);
                // Start the new group
                groupStart = faceIndex;
                currentMaterialIndex = faceMaterialIndex;
            }
            
            // Add the last group after the loop finishes
            if (i === faceCount - 1) {
                 terrainGeometry.addGroup(groupStart, indices.length - groupStart, currentMaterialIndex);
            }
        }
        console.log(`Finished assigning material groups. ${terrainGeometry.groups.length} groups created.`);
    } else {
        console.error("Terrain geometry is not indexed. Cannot assign material groups.");
        // Handle the non-indexed case if necessary, though PlaneGeometry should be indexed.
    }
    
    // Create terrain mesh using multiple materials
    const materials = [landMaterial, waterSurfaceMaterial];
    const terrain = new THREE.Mesh(terrainGeometry, materials);
    terrain.position.y = 0;
    scene.add(terrain);
    
    // Remove road rendering to improve performance
    // await loadAndRenderSeattleRoads(scene);
    
    // Initialize terrain info display for hover information
    initTerrainInfoDisplay(scene, terrain);
    
    // Add additional debug markers if needed
    // Temporarily disable landmark markers for performance testing
    // addLandmarkMarkers(scene);
    
    // Optional: Comment out or remove the old explicit water body markers if the plane is sufficient
    // addExplicitWaterBodies(scene, TERRAIN_BASE_SIZE); 
    
    console.log("Seattle terrain created successfully");
  } catch (error) {
    console.error("Error creating Seattle terrain:", error);
  }
}

/**
 * Creates a 2D array marking water areas based on water body coordinates
 * @param gridSize Size of the grid to create
 * @returns A 2D boolean array where true indicates water
 */
function createWaterMap(gridSize: number): boolean[][] {
  // Initialize water map with all false (land)
  const waterMap: boolean[][] = [];
  for (let z = 0; z < gridSize; z++) {
    waterMap[z] = [];
    for (let x = 0; x < gridSize; x++) {
      waterMap[z][x] = false;
    }
  }
  
  // Mark water areas based on water body coordinates and radius
  for (const waterBody of WATER_BODIES) {
    // Calculate normalized position (0 to 1) within Seattle bounds
    const normalizedX = (waterBody.lng - SEATTLE_BOUNDS.minLng) / (SEATTLE_BOUNDS.maxLng - SEATTLE_BOUNDS.minLng);
    const normalizedZ = (waterBody.lat - SEATTLE_BOUNDS.minLat) / (SEATTLE_BOUNDS.maxLat - SEATTLE_BOUNDS.minLat);
    
    // Convert to grid coordinates
    const gridX = Math.floor(normalizedX * (gridSize - 1));
    const gridZ = Math.floor(normalizedZ * (gridSize - 1));
    
    // Calculate radius in grid cells
    const gridRadius = Math.floor((waterBody.radius / 8000) * gridSize);
    
    // Mark all cells within radius as water
    for (let z = 0; z < gridSize; z++) {
      for (let x = 0; x < gridSize; x++) {
        // Calculate distance from water body center
        const dx = x - gridX;
        const dz = z - gridZ;
        const distance = Math.sqrt(dx*dx + dz*dz);
        
        // If within radius, mark as water
        if (distance <= gridRadius) {
          waterMap[z][x] = true;
        }
      }
    }
  }
  
  return waterMap;
}

/**
 * Adds visual markers for major landmarks
 * @param scene The THREE.js scene
 */
function addLandmarkMarkers(scene: THREE.Scene): void {
  console.log("Adding landmark markers:");
  
  for (const landmark of LANDMARKS) {
    // Project geographic coordinates to game coordinates
    const [x, z] = projectToGameCoords(landmark.lng, landmark.lat);
    
    // Check if this is a water landmark
    const isWater = WATER_BODIES.some(w => w.name === landmark.name);
    
    if (!isWater) {
      // Create marker for land landmarks - taller for visibility with flat terrain
      const markerGeometry = new THREE.CylinderGeometry(30, 30, 400, 8);
      const markerMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xff4500, // Orange-red for landmarks 
        emissive: 0xff2000,
        emissiveIntensity: 0.5
      });
      
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.set(x, 200, z); // Higher position above flatter terrain
      scene.add(marker);
      
      console.log(`Added marker for ${landmark.name} at (${x}, ${z})`);
    }
  }
}

/**
 * Adds distinctive water bodies to the scene
 * @param scene The THREE.js scene
 * @param baseSize The base size of the terrain
 * @deprecated This function is likely obsolete now that a main water plane is used.
 */
function addExplicitWaterBodies(scene: THREE.Scene, baseSize: number): void {
  console.warn("addExplicitWaterBodies is deprecated and may be removed. Using main water plane instead.");
  console.log("Adding water body markers");

  // Create a distinctive blue material for water
  const waterMaterial = new THREE.MeshStandardMaterial({
    color: 0x0088FF,
    emissive: 0x0044FF,
    emissiveIntensity: 0.5,
    transparent: true,
    opacity: 0.7,
    side: THREE.DoubleSide
  });
  
  // Add markers for each water body
  for (const waterBody of WATER_BODIES) {
    // Project the geographic coordinates to game coordinates
    const [x, z] = projectToGameCoords(waterBody.lng, waterBody.lat);
    
    // Create a flat disc for the water body - more visible with flat terrain
    const waterGeometry = new THREE.CylinderGeometry(waterBody.radius, waterBody.radius, 1, 32);
    const waterMarker = new THREE.Mesh(waterGeometry, waterMaterial);
    waterMarker.position.set(x, WATER_LEVEL + 1, z); // 1m above water level
    waterMarker.rotation.x = Math.PI / 2; // Make it flat
    scene.add(waterMarker);
    
    // Add a center marker at water surface
    const centerMarker = new THREE.Mesh(
      new THREE.SphereGeometry(100, 16, 16),
      new THREE.MeshStandardMaterial({
        color: 0x00FFFF,
        emissive: 0x00FFFF,
        emissiveIntensity: 1.0
      })
    );
    centerMarker.position.set(x, 20, z); // Reduced height for visibility
    scene.add(centerMarker);
    
    console.log(`Added water marker for ${waterBody.name} at (${x}, ${z})`);
  }
}

/**
 * Calculates the terrain elevation (y-coordinate) in game world units
 * at a given game world (x, z) coordinate.
 * @param x Game world x-coordinate
 * @param z Game world z-coordinate
 * @returns The terrain y-coordinate at the given position, or a default value if data is unavailable.
 */
export function getTerrainElevation(x: number, z: number): number {
  // Check if elevation data has been loaded
  if (!elevationData) {
    console.warn("Elevation data not loaded, cannot get terrain elevation.");
    return 0; // Return a default height (e.g., 0) if data isn't ready
  }

  // Retrieve necessary metadata and grid data
  const dataSize = elevationData.metadata.size;
  const grid = elevationData.grid;
  // Calculate half size based on the terrain plane dimensions used during creation
  const halfSize = TERRAIN_BASE_SIZE * 0.4;

  // Calculate normalized position (0 to 1) relative to the terrain geometry plane
  // These calculations must match those used in createSeattleTerrainFromGrid
  const normalizedX = (x + halfSize) / (TERRAIN_BASE_SIZE * 0.8);
  const normalizedZ = (z + halfSize) / (TERRAIN_BASE_SIZE * 0.8); // Game Z corresponds to geometry Z due to rotation

  // Map normalized coordinates to grid indices in the elevation data
  const gridX = Math.floor(normalizedX * dataSize);
  const gridZ = Math.floor(normalizedZ * dataSize);

  // Initialize elevation to the defined water level as a default
  let elevation = WATER_LEVEL;

  // Sample the elevation grid, checking bounds and data validity
  if (gridX >= 0 && gridX < dataSize && gridZ >= 0 && gridZ < dataSize) {
    // Check if the grid row and the specific cell exist and contain a valid number
    if (grid[gridZ] && typeof grid[gridZ][gridX] === 'number' && !isNaN(grid[gridZ][gridX])) {
      elevation = grid[gridZ][gridX];
    }
    // If data is missing or NaN at this point, elevation remains WATER_LEVEL
  }
  // If coordinates are outside grid bounds, elevation remains WATER_LEVEL

  // Apply elevation scaling and water level clamping, matching the terrain vertex calculation
  if (elevation <= WATER_LEVEL) {
    // Return the exact height used for underwater terrain vertices
    return UNDERWATER_VERTEX_HEIGHT;
  } else {
    // Return the scaled elevation used for land vertices
    return elevation * ELEVATION_SCALE;
  }
} 