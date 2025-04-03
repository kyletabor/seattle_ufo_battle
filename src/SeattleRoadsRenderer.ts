/**
 * SeattleRoadsRenderer.ts
 * 
 * Loads and renders Seattle roads from GeoJSON data.
 * Provides a simple road network overlay for the game.
 */

import * as THREE from 'three';
import { projectToGameCoords } from './coordinateUtils';
// Import the function to get terrain elevation
import { getTerrainElevation } from './SeattleElevationGrid';

// Configuration
const ROAD_HEIGHT_OFFSET = 0.5; // Keep a very small offset above terrain
const ROAD_COLOR = 0x777777; // Gray color for roads
const ROAD_RIBBON_WIDTH = 15; // Width of road ribbons
const ROAD_OPACITY = 0.9; // Opacity of road materials

/**
 * Loads and renders Seattle roads from GeoJSON data
 * @param scene The THREE.js scene to add roads to
 * @returns Promise resolving when roads are loaded
 */
export async function loadAndRenderSeattleRoads(scene: THREE.Scene): Promise<void> {
  try {
    console.log("Loading Seattle roads...");
    const response = await fetch('/seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson');
    if (!response.ok) {
      throw new Error(`Failed to load road data: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log(`Seattle roads GeoJSON loaded successfully. Contains ${data.features.length} features.`);
    
    // Create a single ribbon material for all roads
    // Enable polygon offset to prevent z-fighting and ensure roads draw on top of terrain
    const ribbonMaterial = new THREE.MeshBasicMaterial({
      color: ROAD_COLOR,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: ROAD_OPACITY,
      polygonOffset: true,         // Enable polygon offset
      polygonOffsetFactor: -1.0, // Push slightly towards camera
      polygonOffsetUnits: -4.0   // Push slightly towards camera
    });
    
    // Process each feature in the GeoJSON
    let roadCount = 0;
    
    for (const feature of data.features) {
      if (!feature.geometry) continue;
      
      // Check geometry type and render accordingly
      if (feature.geometry.type === 'LineString') {
        renderLineString(scene, feature.geometry.coordinates, ribbonMaterial);
        roadCount++;
      } else if (feature.geometry.type === 'MultiLineString') {
        for (const line of feature.geometry.coordinates) {
          renderLineString(scene, line, ribbonMaterial);
          roadCount++;
        }
      }
    }
    
    console.log(`Rendered ${roadCount} road segments`);
  } catch (error) {
    console.error("Error loading road data:", error);
  }
}

/**
 * Renders a single line string as a 3D ribbon for better visibility
 * @param scene The THREE.js scene
 * @param coordinates GeoJSON coordinates
 * @param ribbonMaterial Material for the ribbon
 */
function renderLineString(
  scene: THREE.Scene, 
  coordinates: number[][], 
  ribbonMaterial: THREE.MeshBasicMaterial
): void {
  // Skip if not enough points
  if (coordinates.length < 2) return;
  
  // Create geometry from the coordinates
  const points: THREE.Vector3[] = [];
  
  for (const point of coordinates) {
    // GeoJSON coordinates are [longitude, latitude]
    const [lng, lat] = point;
    
    // Project to game coordinates (x, z)
    const [x, z] = projectToGameCoords(lng, lat);
    
    // Get the terrain elevation at this (x, z) coordinate
    const terrainY = getTerrainElevation(x, z);
    
    // Add point with y set to terrain height plus a small offset
    points.push(new THREE.Vector3(x, terrainY + ROAD_HEIGHT_OFFSET, z));
  }
  
  // Create a ribbon/tube for better visibility (WebGL line width limitations)
  createRoadRibbon(scene, points, ribbonMaterial);
}

/**
 * Creates a visible ribbon for roads
 * @param scene The THREE.js scene
 * @param points Array of Vector3 points defining the road
 * @param ribbonMaterial Material for the ribbon
 */
function createRoadRibbon(
  scene: THREE.Scene,
  points: THREE.Vector3[],
  ribbonMaterial: THREE.MeshBasicMaterial
): void {
  if (points.length < 2) return;
  
  // Create segments for the ribbon
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    
    // Calculate direction vector
    const direction = new THREE.Vector3().subVectors(p2, p1);
    const length = direction.length();
    
    // Skip very short segments
    if (length < 0.1) continue;
    
    // Create a plane geometry
    const ribbonGeometry = new THREE.PlaneGeometry(length, ROAD_RIBBON_WIDTH);
    
    // Position at midpoint between p1 and p2
    const midpoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
    
    // Create the ribbon mesh
    const ribbon = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
    ribbon.position.copy(midpoint);
    
    // Orient the ribbon along the line
    ribbon.lookAt(p2);
    ribbon.rotateX(Math.PI / 2); // Rotate to be vertical
    
    // Add to scene
    scene.add(ribbon);
  }
} 