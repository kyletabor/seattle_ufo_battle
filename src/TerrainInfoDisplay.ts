/**
 * TerrainInfoDisplay.ts
 * 
 * Implements a hover information display for terrain showing elevation and coordinates
 * NOTE: This feature has been disabled as it's not needed for gameplay
 */

import * as THREE from 'three';
import { gameToGeoCoords } from './coordinateUtils';

// Configuration
const DISPLAY_UPDATE_INTERVAL = 100; // Update rate in ms
const TOOLTIP_OFFSET_X = 15; // Pixels to offset tooltip from cursor
const TOOLTIP_OFFSET_Y = 15; // Pixels to offset tooltip from cursor

// Module state
let raycaster: THREE.Raycaster;
let mouse: THREE.Vector2;
let camera: THREE.Camera;
let terrain: THREE.Mesh;
let elevationGrid: number[][] | null = null;
let metadata: any = null;
let tooltipElement: HTMLElement;
let isUpdating = false;
let lastUpdateTime = 0;

/**
 * Initializes the terrain information display
 * This function is now disabled to remove the mouse over modal
 * @param scene The THREE.js scene
 * @param terrainMesh The terrain mesh to raycast against
 */
export function initTerrainInfoDisplay(
  scene: THREE.Scene,
  terrainMesh: THREE.Mesh
): void {
  // Feature disabled - we don't want the mouse over information modal
  console.log("Terrain info display is disabled");
  return;
  
  // Store references
  terrain = terrainMesh;
  
  // Find camera in the scene
  scene.traverse((object) => {
    if (object instanceof THREE.PerspectiveCamera || object instanceof THREE.OrthographicCamera) {
      camera = object as THREE.Camera;
    }
  });
  
  if (!camera) {
    camera = scene.children.find(child => child instanceof THREE.Camera) as THREE.Camera;
    if (!camera) {
      console.error("No camera found in scene");
      return;
    }
  }
  
  // Initialize raycaster and mouse position
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  
  // Create tooltip element
  tooltipElement = document.createElement('div');
  tooltipElement.style.position = 'absolute';
  tooltipElement.style.padding = '8px';
  tooltipElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  tooltipElement.style.color = 'white';
  tooltipElement.style.fontFamily = 'monospace';
  tooltipElement.style.fontSize = '12px';
  tooltipElement.style.borderRadius = '4px';
  tooltipElement.style.pointerEvents = 'none'; // Allow clicks to pass through
  tooltipElement.style.display = 'none';
  tooltipElement.style.zIndex = '1000';
  document.body.appendChild(tooltipElement);
  
  // Add event listeners
  window.addEventListener('mousemove', onMouseMove);
  
  // Start update loop
  update();
  
  console.log("Terrain info display initialized");
}

/**
 * Handles mouse movement to update raycast position
 * @param event Mouse event
 */
function onMouseMove(event: MouseEvent): void {
  // Feature disabled
  return;
  
  // Original implementation commented out
  /*
  // Update mouse position in normalized device coordinates (-1 to +1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  // Position tooltip near cursor
  tooltipElement.style.left = `${event.clientX + TOOLTIP_OFFSET_X}px`;
  tooltipElement.style.top = `${event.clientY + TOOLTIP_OFFSET_Y}px`;
  */
}

/**
 * Gets the elevation at a specific grid position
 * @param x X coordinate in the grid
 * @param z Z coordinate in the grid
 * @returns Elevation at the given position, or null if out of bounds
 */
function getElevationAt(x: number, z: number): number | null {
  // Feature disabled
  return null;
  
  /*
  if (!elevationGrid || !metadata) {
    return null;
  }
  
  const size = metadata.size;
  
  // Convert from game coordinates to grid indices
  const gridX = Math.floor((x / 8000 + 0.5) * size);
  const gridZ = Math.floor((z / 8000 + 0.5) * size);
  
  // Check bounds
  if (gridX < 0 || gridX >= size || gridZ < 0 || gridZ >= size) {
    return null;
  }
  
  // Get elevation from grid
  if (elevationGrid[gridZ] && typeof elevationGrid[gridZ][gridX] === 'number') {
    return elevationGrid[gridZ][gridX];
  }
  
  return null;
  */
}

/**
 * Main update loop
 */
function update(): void {
  // Feature disabled
  return;
  
  /*
  // Rate limit updates
  const now = Date.now();
  if (now - lastUpdateTime < DISPLAY_UPDATE_INTERVAL) {
    requestAnimationFrame(update);
    return;
  }
  lastUpdateTime = now;
  
  // Perform raycast from mouse position
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(terrain);
  
  if (intersects.length > 0) {
    // Show tooltip
    tooltipElement.style.display = 'block';
    
    // Get intersection point
    const point = intersects[0].point;
    
    // Get position in game coordinates
    const gameX = point.x;
    const gameZ = point.z;
    
    // Get elevation at this point
    const elevation = point.y;
    const gridElevation = getElevationAt(gameX, gameZ);
    
    // Convert game coordinates to geographic coordinates
    const [longitude, latitude] = gameToGeoCoords(gameX, gameZ);
    
    // Format information
    tooltipElement.innerHTML = `
      <div style="font-weight:bold;margin-bottom:4px;border-bottom:1px solid #555;">Terrain Information</div>
      <div>Position: X=${gameX.toFixed(1)}, Z=${gameZ.toFixed(1)}</div>
      <div>Elevation: ${elevation.toFixed(2)}m</div>
      <div>Grid Elevation: ${gridElevation !== null ? gridElevation.toFixed(2) + 'm' : 'N/A'}</div>
      <div>Coordinates: ${latitude.toFixed(6)}°N, ${-longitude.toFixed(6)}°W</div>
    `;
  } else {
    // Hide tooltip if not hovering over terrain
    tooltipElement.style.display = 'none';
  }
  
  // Continue update loop
  requestAnimationFrame(update);
  */
}

/**
 * Sets elevation data for more detailed info display
 * @param grid The elevation grid data
 * @param elevationMetadata The elevation metadata
 */
export function setElevationData(grid: number[][], elevationMetadata: any): void {
  // Feature disabled
  return;
  
  /*
  elevationGrid = grid;
  metadata = elevationMetadata;
  */
}

/**
 * Cleanup function to remove event listeners
 */
export function cleanup(): void {
  // Feature disabled
  return;
  
  /*
  window.removeEventListener('mousemove', onMouseMove);
  document.body.removeChild(tooltipElement);
  */
} 