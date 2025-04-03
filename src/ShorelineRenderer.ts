/**
 * ShorelineRenderer.ts
 * 
 * Loads and renders Seattle shoreline data as thick blue lines
 * that sit slightly above the terrain surface.
 */

import * as THREE from 'three';
import { projectToGameCoords, isCentered, getScaleFactor } from './coordinateUtils';
import { resolveResourcePath, getDataPaths } from './utils/pathResolver';

// Configuration
const SHORELINE_HEIGHT_OFFSET = 50; // Increased to 50 meters above terrain for better visibility 
const SHORELINE_COLOR = 0x00FFFF; // Bright cyan for maximum visibility
const SHORELINE_THICKNESS = 20; // Increased thickness for visibility
const SHORELINE_MARKER_SIZE = 200; // Size of debug markers in meters

// Note: We're no longer using the hardcoded scale factor, instead using the
// calculated value from coordinateUtils.getScaleFactor()

/**
 * Loads shoreline data from GeoJSON and renders it as lines
 * @param scene The THREE.js scene to add the shorelines to
 * @returns Promise resolving when shorelines are loaded
 */
export async function loadAndRenderShorelines(scene: THREE.Scene): Promise<void> {
  try {
    console.log("Loading shoreline data...");
    
    try {
      // Define paths to try in order
      const paths = getDataPaths(
        './seattle_data/shorline/seattle_shoreline.geojson',   // Development path
        './seattle_data/shorline/seattle_shoreline.geojson'    // Production path (same in this case)
      );
      
      // Use our utility to try all possible paths
      const response = await resolveResourcePath(paths);
      
      const data = await response.json();
      console.log("Shoreline GeoJSON loaded successfully");
      
      // Process each feature in the GeoJSON
      // ... existing processing code ...
      
      // Add a bright visual marker at scene origin for reference
      addDebugMarker(scene, 0, 0, 0x00FF00, 300); // Green marker at origin
      
      // Add debug markers at known Seattle landmarks to check coordinate system
      addLandmarkDebugMarkers(scene);
      
      // Create material for shorelines
      const shorelineMaterial = new THREE.LineBasicMaterial({
        color: SHORELINE_COLOR,
        linewidth: SHORELINE_THICKNESS,
        linecap: 'round',
        linejoin: 'round'
      });
      
      // Create a massively tall and visible shoreline box for a reference
      createDebugShorelineBoundingBox(scene);
      
      // Process each feature in the GeoJSON
      let shorelineCount = 0;
      const allShorelinePoints: THREE.Vector3[] = [];
      
      // Extract all coordinates for analysis first
      for (const feature of data.features) {
        if (!feature.geometry) continue;
        
        if (feature.geometry.type === 'LineString') {
          extractPoints(feature.geometry.coordinates, allShorelinePoints);
        } else if (feature.geometry.type === 'MultiLineString') {
          for (const line of feature.geometry.coordinates) {
            extractPoints(line, allShorelinePoints);
          }
        } else if (feature.geometry.type === 'Polygon') {
          for (const ring of feature.geometry.coordinates) {
            extractPoints(ring, allShorelinePoints);
          }
        } else if (feature.geometry.type === 'MultiPolygon') {
          for (const polygon of feature.geometry.coordinates) {
            for (const ring of polygon) {
              extractPoints(ring, allShorelinePoints);
            }
          }
        }
      }
      
      // Find the bounding box of all shoreline points
      let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
      for (const point of allShorelinePoints) {
        minX = Math.min(minX, point.x);
        maxX = Math.max(maxX, point.x);
        minZ = Math.min(minZ, point.z);
        maxZ = Math.max(maxZ, point.z);
      }
      
      // Log the shoreline bounding box
      console.log(`Shoreline coordinates range:`, {
        x: [minX, maxX],
        z: [minZ, maxZ],
        width: maxX - minX,
        height: maxZ - minZ,
        center: [(minX + maxX) / 2, (minZ + maxZ) / 2]
      });
      
      // Add markers at the corners of the bounding box
      // Note: No manual scaling is needed as our coordinates are already properly scaled
      addDebugMarker(scene, minX, minZ, 0xFF0000, 200); // Red marker at min corner
      addDebugMarker(scene, maxX, maxZ, 0x0000FF, 200); // Blue marker at max corner
      addDebugMarker(scene, (minX + maxX) / 2, (minZ + maxZ) / 2, 0xFFFF00, 500); // Yellow marker at center
      
      // Create a super visible wireframe box
      createWireframeBox(scene, minX, minZ, maxX, maxZ);
      
      // Process each feature for rendering
      for (const feature of data.features) {
        if (!feature.geometry) continue;
        
        if (feature.geometry.type === 'LineString') {
          renderLineString(scene, feature.geometry.coordinates, shorelineMaterial);
          shorelineCount++;
        } else if (feature.geometry.type === 'MultiLineString') {
          for (const line of feature.geometry.coordinates) {
            renderLineString(scene, line, shorelineMaterial);
            shorelineCount++;
          }
        } else if (feature.geometry.type === 'Polygon') {
          for (const ring of feature.geometry.coordinates) {
            renderLineString(scene, ring, shorelineMaterial);
            shorelineCount++;
          }
        } else if (feature.geometry.type === 'MultiPolygon') {
          for (const polygon of feature.geometry.coordinates) {
            for (const ring of polygon) {
              renderLineString(scene, ring, shorelineMaterial);
              shorelineCount++;
            }
          }
        }
      }
      
      console.log(`Rendered ${shorelineCount} shoreline segments`);
      
    } catch (error) {
      console.warn("Shoreline data file not found or invalid, using fallback simplified shoreline:", error);
      
      // Create a simplified shoreline representation using a basic shape
      createSimplifiedShoreline(scene);
    }
  } catch (error) {
    console.error("Error in shoreline rendering:", error);
  }
}

/**
 * Extracts points from GeoJSON coordinates and adds them to the allShorelinePoints array
 * @param coordinates GeoJSON coordinates
 * @param allShorelinePoints Array to add points to
 */
function extractPoints(coordinates: number[][], allShorelinePoints: THREE.Vector3[]): void {
  for (const point of coordinates) {
    const [lng, lat] = point;
    // Use projectToGameCoords directly, which now handles scaling internally
    const [x, z] = projectToGameCoords(lng, lat);
    allShorelinePoints.push(new THREE.Vector3(x, SHORELINE_HEIGHT_OFFSET, z));
  }
}

/**
 * Creates a wireframe box around the shoreline data
 */
function createWireframeBox(scene: THREE.Scene, minX: number, minZ: number, maxX: number, maxZ: number): void {
  const width = maxX - minX;
  const depth = maxZ - minZ;
  const height = 1000; // Very tall for visibility
  
  const boxGeometry = new THREE.BoxGeometry(width, height, depth);
  const boxMaterial = new THREE.MeshBasicMaterial({
    color: 0xFF00FF,
    wireframe: true,
    transparent: true,
    opacity: 0.8
  });
  
  const box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.position.set(minX + width / 2, height / 2, minZ + depth / 2);
  scene.add(box);
}

/**
 * Creates a debug bounding box to help visualize where shorelines should be
 */
function createDebugShorelineBoundingBox(scene: THREE.Scene): void {
  // Create a large box to visualize the bounds of where shorelines should appear
  const size = 8000; // Match terrain size exactly (8000m)
  const boxGeometry = new THREE.BoxGeometry(size, 500, size);
  const boxMaterial = new THREE.MeshBasicMaterial({
    color: 0x00FF00,
    wireframe: true,
    transparent: true,
    opacity: 0.3
  });
  
  const box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.position.set(0, 250, 0); // Centered at origin, 250m up
  scene.add(box);
  
  // Add axes for reference
  const axesHelper = new THREE.AxesHelper(5000);
  scene.add(axesHelper);
}

/**
 * Adds debug markers at known Seattle landmarks to verify coordinate system
 */
function addLandmarkDebugMarkers(scene: THREE.Scene): void {
  // These are some key Seattle landmarks with their lat/long coordinates
  const landmarks = [
    { name: "Space Needle", lat: 47.6205, lng: -122.3493, color: 0xFFFF00 },
    { name: "Pike Place Market", lat: 47.6097, lng: -122.3422, color: 0xFF00FF },
    { name: "Seattle Aquarium", lat: 47.6076, lng: -122.3430, color: 0x00FFFF },
    { name: "Capitol Hill", lat: 47.6253, lng: -122.3222, color: 0xFFA500 },
    { name: "University of Washington", lat: 47.6553, lng: -122.3035, color: 0x800080 },
  ];
  
  for (const landmark of landmarks) {
    const [x, z] = projectToGameCoords(landmark.lng, landmark.lat);
    
    // Add a bright colored marker at the landmark position
    addDebugMarker(scene, x, z, landmark.color, 100);
    
    // Log the landmark position
    console.log(`Added debug marker for ${landmark.name} at game coordinates (${x}, ${z})`);
  }
}

/**
 * Adds a debug marker at the specified position
 */
function addDebugMarker(scene: THREE.Scene, x: number, z: number, color: number, size: number = SHORELINE_MARKER_SIZE): void {
  // Create a bright sphere at the position
  const markerGeometry = new THREE.SphereGeometry(size, 16, 16);
  const markerMaterial = new THREE.MeshBasicMaterial({
    color: color,
    wireframe: true,
    transparent: true,
    opacity: 0.7
  });
  
  const marker = new THREE.Mesh(markerGeometry, markerMaterial);
  marker.position.set(x, SHORELINE_HEIGHT_OFFSET, z);
  scene.add(marker);
  
  // Also add a tall column for better visibility
  const columnGeometry = new THREE.CylinderGeometry(size/4, size/4, 2000, 8);
  const columnMaterial = new THREE.MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: 0.5
  });
  
  const column = new THREE.Mesh(columnGeometry, columnMaterial);
  column.position.set(x, 1000, z);
  scene.add(column);
  
  console.log(`Added debug marker at (${x}, ${z}) with color 0x${color.toString(16)}`);
}

/**
 * Renders a single line string as a 3D line
 * @param scene The THREE.js scene to add the line to
 * @param coordinates GeoJSON coordinates for the line
 * @param material Material to use for the line
 */
function renderLineString(
  scene: THREE.Scene, 
  coordinates: number[][], 
  material: THREE.LineBasicMaterial
): void {
  // Create geometry from the coordinates
  const points: THREE.Vector3[] = [];
  
  for (const point of coordinates) {
    // GeoJSON coordinates are [longitude, latitude]
    const [lng, lat] = point;
    
    // Project to game coordinates with built-in scaling
    const [x, z] = projectToGameCoords(lng, lat);
    
    // Use a constant y value to keep lines above terrain
    const y = SHORELINE_HEIGHT_OFFSET;
    
    // Add point (no need for manual scaling as it's handled by projectToGameCoords)
    points.push(new THREE.Vector3(x, y, z));
  }
  
  // Skip if we don't have enough points
  if (points.length < 2) return;
  
  // Create the line geometry
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  
  // Create the line
  const line = new THREE.Line(geometry, material);
  
  // Add to scene
  scene.add(line);
  
  // Create a tube/ribbon version for better visibility (WebGL line width limitations)
  createVisibleShorelineRibbon(scene, points);
}

/**
 * Creates a visible ribbon/tube for shorelines since WebGL has line width limitations
 * @param scene The THREE.js scene
 * @param points Array of Vector3 points defining the shoreline
 */
function createVisibleShorelineRibbon(scene: THREE.Scene, points: THREE.Vector3[]): void {
  if (points.length < 2) return;
  
  // Create a ribbon material
  const ribbonMaterial = new THREE.MeshBasicMaterial({
    color: 0x00FFFF, // Cyan for better visibility
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.8
  });
  
  // Create segments for the ribbon
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    
    // Calculate direction vector
    const direction = new THREE.Vector3().subVectors(p2, p1);
    const length = direction.length();
    
    // Skip very short segments
    if (length < 0.1) continue;
    
    // Create ribbon
    const width = 15; // Width of the ribbon in meters - increased for visibility
    
    // Create a plane geometry
    const ribbonGeometry = new THREE.PlaneGeometry(length, width);
    
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

/**
 * Creates a simplified representation of Seattle's shoreline when the data file is not available
 * @param scene The Three.js scene to add the shoreline to
 */
function createSimplifiedShoreline(scene: THREE.Scene): void {
  console.log("Creating simplified Seattle shoreline representation");
  
  // Create material for shorelines
  const shorelineMaterial = new THREE.LineBasicMaterial({
    color: SHORELINE_COLOR,
    linewidth: SHORELINE_THICKNESS,
    linecap: 'round',
    linejoin: 'round'
  });
  
  // Add debug markers and helpers
  addDebugMarker(scene, 0, 0, 0x00FF00, 300); // Green marker at origin
  addLandmarkDebugMarkers(scene);
  createDebugShorelineBoundingBox(scene);
  
  // Define some key points of Seattle's shoreline (approximate)
  // These coordinates should be already processed through projectToGameCoords
  const simplifiedShorelinePoints = [
    // Puget Sound / Elliott Bay (western shoreline)
    [-4000, -3000],
    [-3500, -2000],
    [-3000, -1000],
    [-2800, 0],
    [-2600, 1000],
    [-2400, 2000],
    [-2200, 3000],
    
    // North shoreline
    [-1500, 3500],
    [-500, 3800],
    [500, 3900],
    [1500, 3800],
    [2500, 3500],
    
    // Lake Washington (eastern shoreline)
    [3000, 3000],
    [3200, 2000],
    [3400, 1000],
    [3500, 0],
    [3400, -1000],
    [3200, -2000],
    [3000, -3000],
    
    // South shoreline
    [2500, -3500],
    [1500, -3700],
    [500, -3800],
    [-500, -3700],
    [-1500, -3500],
    [-2500, -3200],
    [-4000, -3000], // Close the loop
  ];
  
  // Convert the simple points to Three.js Vector3 objects
  const points: THREE.Vector3[] = [];
  for (const [x, z] of simplifiedShorelinePoints) {
    points.push(new THREE.Vector3(x, SHORELINE_HEIGHT_OFFSET, z));
  }
  
  // Create a line geometry from the points
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, shorelineMaterial);
  scene.add(line);
  
  console.log("Simplified shoreline rendered with 26 points");
} 