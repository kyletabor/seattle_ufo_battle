/**
 * coordinateUtils.ts
 * Utilities for transforming geographic coordinates to game world coordinates.
 * Uses the proj4js library to project from WGS84 lat/long to UTM Zone 10N (Seattle).
 */

import proj4 from 'proj4';

// Define coordinate systems
// WGS84 (EPSG:4326) - Standard geographic coordinates (latitude/longitude)
// UTM Zone 10N (EPSG:32610) - Projection system appropriate for Seattle area
proj4.defs('EPSG:4326', '+proj=longlat +datum=WGS84 +no_defs');
proj4.defs('EPSG:32610', '+proj=utm +zone=10 +datum=WGS84 +units=m +no_defs');

// Center coordinates in UTM projection - will be calculated dynamically
let utmCenterX = 0;
let utmCenterY = 0;
let boundingBoxCalculated = false;

// Geographic bounds - set when projection center is calculated
let geoBounds = {
  minLng: 0,
  maxLng: 0,
  minLat: 0,
  maxLat: 0
};

// Terrain dimensions and scaling
let terrainBaseSize = 8000; // Default terrain size (can be set by setTerrainSize)
let calculatedScaleFactor = 1; // Will be computed based on geographic bounds and terrain size

// Debug flag - set to true to print coordinate transformation details
const DEBUG_COORDINATES = true;

/**
 * Projects geographic coordinates (longitude, latitude) to game world coordinates (x, z).
 * @param longitude Longitude coordinate (X in WGS84)
 * @param latitude Latitude coordinate (Y in WGS84)
 * @returns [x, z] coordinates for the game world
 */
export function projectToGameCoords(longitude: number, latitude: number, applyScaleFactor = true): [number, number] {
  // Convert NaN or invalid coordinates to zeros
  if (isNaN(longitude) || isNaN(latitude)) {
    console.error(`Invalid coordinates: longitude=${longitude}, latitude=${latitude}`);
    return [0, 0];
  }
  
  // Project from WGS84 to UTM Zone 10N
  const [utmX, utmY] = proj4('EPSG:4326', 'EPSG:32610', [longitude, latitude]);
  
  if (DEBUG_COORDINATES && Math.random() < 0.01) { // Only log 1% of transformations to avoid flooding console
    console.log(`Coordinate transformation: 
      WGS84 (${longitude}, ${latitude}) -> 
      UTM (${utmX}, ${utmY}) -> 
      Game (${utmX - utmCenterX}, ${utmCenterY - utmY})
      Center: (${utmCenterX}, ${utmCenterY})
      Centered: ${boundingBoxCalculated}
      Scale Factor: ${calculatedScaleFactor}
    `);
  }
  
  // If center hasn't been calculated yet, use temporary center for Seattle
  if (!boundingBoxCalculated) {
    // Temporary center for Seattle (approximate Space Needle location)
    // This ensures coordinates are reasonable even before proper centering
    const tempUtmCenterX = 550000;  // Approximate center for Seattle in UTM Zone 10N
    const tempUtmCenterY = 5275000; // Approximate center for Seattle in UTM Zone 10N
    
    // FIX: Invert the y-coordinate (north/south) to correct the orientation
    // In UTM, northing (utmY) increases as you go north
    // In our game, z should increase as you go north
    return [utmX - tempUtmCenterX, tempUtmCenterY - utmY];
  }
  
  // Center the coordinates by subtracting the center point
  // FIX: Invert the y-coordinate (north/south) to correct the orientation
  const gameX = utmX - utmCenterX; 
  const gameZ = utmCenterY - utmY; // Invert Y to correct north/south orientation
  
  // Apply scale factor if requested (for shoreline data)
  if (applyScaleFactor) {
    return [gameX * calculatedScaleFactor, gameZ * calculatedScaleFactor];
  }
  
  return [gameX, gameZ];
}

/**
 * Sets the terrain base size for scaling calculations.
 * This should be called before setProjectionCenter for proper scaling.
 * @param baseSize The base size of the terrain in game units (default is 8000)
 */
export function setTerrainSize(baseSize: number): void {
  terrainBaseSize = baseSize;
  console.log(`Terrain base size set to ${terrainBaseSize}`);
}

/**
 * Sets the center point for the projection based on the bounding box of data.
 * @param minLng Minimum longitude (WGS84)
 * @param maxLng Maximum longitude (WGS84)
 * @param minLat Minimum latitude (WGS84)
 * @param maxLat Maximum latitude (WGS84)
 */
export function setProjectionCenter(minLng: number, maxLng: number, minLat: number, maxLat: number): void {
  // Store geographic bounds for scale factor calculation
  geoBounds = { minLng, maxLng, minLat, maxLat };
  
  // Calculate center in geographic coordinates
  const centerLng = (minLng + maxLng) / 2;
  const centerLat = (minLat + maxLat) / 2;
  
  // Project center to UTM
  const [centerUtmX, centerUtmY] = proj4('EPSG:4326', 'EPSG:32610', [centerLng, centerLat]);
  
  // Store center coordinates
  utmCenterX = centerUtmX;
  utmCenterY = centerUtmY;
  boundingBoxCalculated = true;
  
  console.log(`Projection center set to geographic coordinates: (${centerLng}, ${centerLat})`);
  console.log(`Projection center in UTM coordinates: (${utmCenterX}, ${utmCenterY})`);
  
  // Calculate the scale factor based on geographic bounds and terrain size
  calculateScaleFactor();
  
  // Log the corners of the bounding box in game coordinates for debugging
  const [minGameX, minGameZ] = projectToGameCoords(minLng, minLat, false);
  const [maxGameX, maxGameZ] = projectToGameCoords(maxLng, maxLat, false);
  
  console.log(`Game coordinate bounds (before scaling): 
    X: ${minGameX} to ${maxGameX} (width: ${maxGameX - minGameX})
    Z: ${minGameZ} to ${maxGameZ} (height: ${maxGameZ - minGameZ})
  `);
  
  console.log(`Game coordinate bounds (after scaling): 
    X: ${minGameX * calculatedScaleFactor} to ${maxGameX * calculatedScaleFactor} (width: ${(maxGameX - minGameX) * calculatedScaleFactor})
    Z: ${minGameZ * calculatedScaleFactor} to ${maxGameZ * calculatedScaleFactor} (height: ${(maxGameZ - minGameZ) * calculatedScaleFactor})
  `);
}

/**
 * Calculates the scale factor to properly align terrain and shoreline data.
 * The scale factor is calculated to fit the geographic bounds into the terrain base size.
 */
function calculateScaleFactor(): void {
  if (!boundingBoxCalculated) {
    console.warn("Cannot calculate scale factor: projection center not set");
    return;
  }
  
  // Project the corners of the geographic bounds to UTM game coordinates
  const [minX, minZ] = projectToGameCoords(geoBounds.minLng, geoBounds.minLat, false);
  const [maxX, maxZ] = projectToGameCoords(geoBounds.maxLng, geoBounds.maxLat, false);
  
  // Calculate the width and height in UTM coordinates
  const utmWidth = Math.abs(maxX - minX);
  const utmHeight = Math.abs(maxZ - minZ);
  
  // Determine the larger dimension to maintain aspect ratio
  const maxUtmDimension = Math.max(utmWidth, utmHeight);
  
  // Calculate the scale factor to fit within the terrain base size
  // We use 0.8 as a factor to leave some margin around the edges (80% of terrain size)
  calculatedScaleFactor = (terrainBaseSize * 0.8) / maxUtmDimension;
  
  console.log(`Calculated scale factor: ${calculatedScaleFactor}`);
  console.log(`This scale factor will fit the geographic bounds (${utmWidth}m × ${utmHeight}m) into a ${terrainBaseSize * 0.8}m × ${terrainBaseSize * 0.8}m game area`);
}

/**
 * Returns whether the bounding box and center have been calculated.
 */
export function isCentered(): boolean {
  return boundingBoxCalculated;
}

/**
 * Returns the calculated scale factor for converting UTM coordinates to game coordinates.
 * This should be used instead of the hardcoded SHORELINE_SCALE_FACTOR.
 */
export function getScaleFactor(): number {
  return calculatedScaleFactor;
}

/**
 * Converts game coordinates (x, z) back to geographic coordinates (longitude, latitude)
 * This is the inverse of projectToGameCoords
 * @param x The x coordinate in the game space
 * @param z The z coordinate in the game space
 * @param isScaled Whether the input coordinates have already been scaled (default: true)
 * @returns [longitude, latitude] in degrees
 */
export function gameToGeoCoords(x: number, z: number, isScaled: boolean = true): [number, number] {
  if (!boundingBoxCalculated) {
    console.error("Cannot convert coordinates: projection center not set");
    return [0, 0];
  }

  // Unscale the coordinates if they've been scaled
  const unscaledX = isScaled ? x / calculatedScaleFactor : x;
  const unscaledZ = isScaled ? z / calculatedScaleFactor : z;

  // Convert game coordinates back to UTM by adding the center offset
  // FIX: Invert the z-coordinate back to UTM Y (correct the north/south inversion)
  const utmX = unscaledX + utmCenterX;
  const utmY = utmCenterY - unscaledZ; // Invert z back to UTM Y
  
  // Convert from UTM Zone 10N back to WGS84 (longitude, latitude)
  const [longitude, latitude] = proj4('EPSG:32610', 'EPSG:4326', [utmX, utmY]);
  
  return [longitude, latitude];
} 