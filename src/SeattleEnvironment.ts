/**
 * SeattleEnvironment.ts
 * Handles loading and rendering the Seattle geographical data.
 */

import * as THREE from 'three';
import { projectToGameCoords, setProjectionCenter, isCentered } from './coordinateUtils';

// Type definitions for GeoJSON structures
interface GeoJSONFeature {
  type: string;
  geometry: {
    type: string;
    coordinates: any[]; // Could be deeply nested arrays of coordinates
  };
  properties: Record<string, any>;
}

interface GeoJSONData {
  type: string;
  features: GeoJSONFeature[];
}

// Scale factor for visual clarity - might need adjustment
const ELEVATION_SCALE = 1.0;

/**
 * Loads a GeoJSON file from the given URL.
 * @param url URL of the GeoJSON file to load
 * @returns Promise resolving to the parsed GeoJSON data
 */
export async function loadGeoJsonData(url: string): Promise<GeoJSONData> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load ${url}: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log(`Loaded GeoJSON data from ${url} with ${data.features.length} features`);
    
    // Check if the data contains land polygons
    let hasPolygons = false;
    for (const feature of data.features) {
      if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') {
        hasPolygons = true;
        break;
      }
    }
    
    // If no explicit land polygons, try to convert shoreline to polygons
    if (!hasPolygons) {
      console.log("No land polygons found in data, attempting to create from shoreline");
      
      // Look for LineString or MultiLineString features that represent shorelines
      const lineFeatures = data.features.filter((f: GeoJSONFeature) => 
        f.geometry.type === 'LineString' || f.geometry.type === 'MultiLineString'
      );
      
      if (lineFeatures.length > 0) {
        console.log(`Found ${lineFeatures.length} line features that could represent shoreline`);
        
        // Create a new polygon feature from the first MultiLineString
        // This is a simple approach - for a real solution we'd need to analyze all lines
        for (const lineFeature of lineFeatures) {
          // We'll create a new polygon feature for each line feature
          const newFeature: GeoJSONFeature = {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: []
            },
            properties: { generatedFromShoreline: true }
          };
          
          if (lineFeature.geometry.type === 'MultiLineString') {
            // For simplicity, use the first line string of a MultiLineString
            if (lineFeature.geometry.coordinates.length > 0) {
              const firstLine = lineFeature.geometry.coordinates[0];
              // Skip if we don't have enough points for a valid polygon
              if (firstLine && firstLine.length > 2) {
                // Create a new array for the polygon coordinates
                const lineCoords: number[][] = [];
                
                // Copy each coordinate point
                for (const point of firstLine) {
                  if (Array.isArray(point) && point.length >= 2) {
                    lineCoords.push([point[0], point[1]]);
                  }
                }
                
                // Make sure the polygon is closed
                if (lineCoords.length > 2) {
                  const firstPoint = lineCoords[0];
                  const lastPoint = lineCoords[lineCoords.length - 1];
                  
                  if (firstPoint[0] !== lastPoint[0] || firstPoint[1] !== lastPoint[1]) {
                    // Close the polygon by adding the first point again
                    lineCoords.push([firstPoint[0], firstPoint[1]]);
                  }
                  
                  // Add to the feature's coordinates
                  newFeature.geometry.coordinates = [lineCoords];
                  data.features.push(newFeature);
                }
              }
            }
          } else if (lineFeature.geometry.type === 'LineString') {
            const linePoints = lineFeature.geometry.coordinates;
            // Skip if we don't have enough points for a valid polygon
            if (linePoints && linePoints.length > 2) {
              // Create a new array for the polygon coordinates
              const lineCoords: number[][] = [];
              
              // Copy each coordinate point
              for (const point of linePoints) {
                if (Array.isArray(point) && point.length >= 2) {
                  lineCoords.push([point[0], point[1]]);
                }
              }
              
              // Make sure the polygon is closed
              if (lineCoords.length > 2) {
                const firstPoint = lineCoords[0];
                const lastPoint = lineCoords[lineCoords.length - 1];
                
                if (firstPoint[0] !== lastPoint[0] || firstPoint[1] !== lastPoint[1]) {
                  // Close the polygon by adding the first point again
                  lineCoords.push([firstPoint[0], firstPoint[1]]);
                }
                
                // Add to the feature's coordinates
                newFeature.geometry.coordinates = [lineCoords];
                data.features.push(newFeature);
              }
            }
          }
        }
        
        console.log(`Added ${data.features.length - lineFeatures.length} generated land polygons`);
      }
    }
    
    return data;
  } catch (error) {
    console.error(`Error loading GeoJSON data from ${url}:`, error);
    throw error;
  }
}

/**
 * Creates a Three.js shape from GeoJSON polygon coordinates.
 * @param coordinates GeoJSON coordinates array (potentially nested for multipolygons)
 * @returns THREE.Shape representing the polygon
 */
function createShapeFromGeoJSONPolygon(coordinates: number[][][]): THREE.Shape[] {
  // GeoJSON polygons may have multiple rings (first is exterior, rest are holes)
  const shapes: THREE.Shape[] = [];
  
  // Process each polygon (typically there's just one with potential holes)
  for (const polygon of coordinates) {
    // First ring is the exterior
    if (polygon.length > 0) {
      const exteriorRing = polygon[0];
      
      // Create shape from exterior ring
      const shape = new THREE.Shape();
      let firstPoint = true;
      
      for (const point of exteriorRing) {
        // Project the geographic coordinates to game coordinates
        const [x, z] = projectToGameCoords(point[0], point[1]);
        
        if (firstPoint) {
          shape.moveTo(x, z);
          firstPoint = false;
        } else {
          shape.lineTo(x, z);
        }
      }
      
      // Add holes from inner rings
      for (let i = 1; i < polygon.length; i++) {
        const holePoints = polygon[i];
        const holePath = new THREE.Path();
        
        for (let j = 0; j < holePoints.length; j++) {
          const [x, z] = projectToGameCoords(holePoints[j][0], holePoints[j][1]);
          
          if (j === 0) {
            holePath.moveTo(x, z);
          } else {
            holePath.lineTo(x, z);
          }
        }
        
        shape.holes.push(holePath);
      }
      
      shapes.push(shape);
    }
  }
  
  return shapes;
}

/**
 * Processes MultiLineString features to extract the shoreline boundary.
 * @param feature GeoJSON feature containing a MultiLineString or LineString
 * @returns Array of processed and projected points
 */
function processShorelineFeature(feature: GeoJSONFeature): THREE.Vector2[][] {
  const lineGroups: THREE.Vector2[][] = [];
  
  if (feature.geometry.type === 'MultiLineString') {
    // Handle multiple line segments
    for (const line of feature.geometry.coordinates) {
      const points: THREE.Vector2[] = [];
      
      for (const point of line) {
        const [x, z] = projectToGameCoords(point[0], point[1]);
        points.push(new THREE.Vector2(x, z));
      }
      
      if (points.length > 0) {
        lineGroups.push(points);
      }
    }
  } else if (feature.geometry.type === 'LineString') {
    // Handle single line segment
    const points: THREE.Vector2[] = [];
    
    for (const point of feature.geometry.coordinates) {
      const [x, z] = projectToGameCoords(point[0], point[1]);
      points.push(new THREE.Vector2(x, z));
    }
    
    if (points.length > 0) {
      lineGroups.push(points);
    }
  }
  
  return lineGroups;
}

/**
 * Calculates the bounding box for all coordinates in the GeoJSON data.
 * @param shorelineData The GeoJSON data to analyze
 * @returns Object containing min/max coordinates in both raw and projected coordinates
 */
function calculateBoundingBox(shorelineData: GeoJSONData) {
  // Start with extreme values
  let minLon = Infinity;
  let maxLon = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;
  
  let minUtmX = Infinity;
  let maxUtmX = -Infinity;
  let minUtmY = Infinity;
  let maxUtmY = -Infinity;
  
  // Process all features in the shoreline data
  for (const feature of shorelineData.features) {
    if (feature.geometry.type === 'MultiLineString') {
      for (const line of feature.geometry.coordinates) {
        for (const point of line) {
          const lon = point[0];
          const lat = point[1];
          
          // Update geographic bounds
          minLon = Math.min(minLon, lon);
          maxLon = Math.max(maxLon, lon);
          minLat = Math.min(minLat, lat);
          maxLat = Math.max(maxLat, lat);
          
          // Project and update UTM bounds
          const [utmX, utmY] = projectToGameCoords(lon, lat);
          minUtmX = Math.min(minUtmX, utmX);
          maxUtmX = Math.max(maxUtmX, utmX);
          minUtmY = Math.min(minUtmY, utmY);
          maxUtmY = Math.max(maxUtmY, utmY);
        }
      }
    } else if (feature.geometry.type === 'LineString') {
      for (const point of feature.geometry.coordinates) {
        const lon = point[0];
        const lat = point[1];
        
        // Update geographic bounds
        minLon = Math.min(minLon, lon);
        maxLon = Math.max(maxLon, lon);
        minLat = Math.min(minLat, lat);
        maxLat = Math.max(maxLat, lat);
        
        // Project and update UTM bounds
        const [utmX, utmY] = projectToGameCoords(lon, lat);
        minUtmX = Math.min(minUtmX, utmX);
        maxUtmX = Math.max(maxUtmX, utmX);
        minUtmY = Math.min(minUtmY, utmY);
        maxUtmY = Math.max(maxUtmY, utmY);
      }
    }
  }
  
  return {
    geographic: { minLon, maxLon, minLat, maxLat },
    projected: { minUtmX, maxUtmX, minUtmY, maxUtmY }
  };
}

/**
 * Attempts to create closed polygons from a collection of line strings.
 * This function will join line strings that have matching endpoints and close any remaining open paths.
 * @param lineStrings Array of line strings to process
 * @returns Array of closed polygons as arrays of coordinates
 */
function createClosedPolygonsFromLines(lineStrings: number[][][]): number[][][] {
  // First, print some statistics about the input data
  console.log(`Starting polyline processing with ${lineStrings.length} line segments`);
  let totalPoints = 0;
  let minLineLength = Infinity;
  let maxLineLength = 0;
  
  for (const line of lineStrings) {
    totalPoints += line.length;
    minLineLength = Math.min(minLineLength, line.length);
    maxLineLength = Math.max(maxLineLength, line.length);
  }
  
  console.log(`Total points: ${totalPoints}, min segment length: ${minLineLength}, max segment length: ${maxLineLength}`);
  
  // Increased tolerance for connecting endpoints
  const POINT_MATCH_TOLERANCE = 0.001; // Increased from 0.0001
  
  // More detailed function to check if points match
  const pointsMatch = (p1: number[], p2: number[], tolerance = POINT_MATCH_TOLERANCE) => {
    const distance = Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
    return distance < tolerance;
  };
  
  // Function to get the squared distance between two points (faster than calculating actual distance)
  const getSquaredDistance = (p1: number[], p2: number[]) => {
    return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
  };
  
  // Create working copies of line strings to manipulate
  const workingLines: number[][][] = lineStrings.map(line => [...line]);
  
  // Stage 1: Try to connect line segments into longer chains
  // We'll start with the longest lines and try to extend them
  
  // Sort line segments by length (start with longer ones)
  const lineIndices = workingLines.map((_, index) => index);
  lineIndices.sort((a, b) => workingLines[b].length - workingLines[a].length);
  
  // Track which lines have been processed
  const processedLines = new Set<number>();
  
  // Structure to store our growing polylines
  const polylines: number[][][] = [];
  
  // Process each line, starting with the longest
  for (const startIdx of lineIndices) {
    if (processedLines.has(startIdx)) continue;
    
    // Start a new polyline with this segment
    let currentLine = [...workingLines[startIdx]];
    processedLines.add(startIdx);
    
    // Keep track of whether we found any connections
    let foundConnection = true;
    let connectionsCount = 0;
    
    // Try to extend the polyline by finding connecting segments
    while (foundConnection) {
      foundConnection = false;
      
      // We need to check both the start and end of our growing polyline
      const startPoint = currentLine[0];
      const endPoint = currentLine[currentLine.length - 1];
      
      // Find best next segment (closest matching endpoint)
      let bestNextIdx = -1;
      let bestNextDistance = POINT_MATCH_TOLERANCE * POINT_MATCH_TOLERANCE; // Square of tolerance
      let bestConnectionType = '';
      
      // Try to find the closest segment to connect
      for (let i = 0; i < workingLines.length; i++) {
        if (processedLines.has(i)) continue;
        
        const candidateLine = workingLines[i];
        if (candidateLine.length < 2) continue; // Skip degenerate lines
        
        const candidateStart = candidateLine[0];
        const candidateEnd = candidateLine[candidateLine.length - 1];
        
        // Check various connection possibilities
        
        // Our end to candidate start
        const endToStartDist = getSquaredDistance(endPoint, candidateStart);
        if (endToStartDist < bestNextDistance) {
          bestNextDistance = endToStartDist;
          bestNextIdx = i;
          bestConnectionType = 'end-to-start';
        }
        
        // Our end to candidate end (need to reverse candidate)
        const endToEndDist = getSquaredDistance(endPoint, candidateEnd);
        if (endToEndDist < bestNextDistance) {
          bestNextDistance = endToEndDist;
          bestNextIdx = i;
          bestConnectionType = 'end-to-end';
        }
        
        // Our start to candidate end
        const startToEndDist = getSquaredDistance(startPoint, candidateEnd);
        if (startToEndDist < bestNextDistance) {
          bestNextDistance = startToEndDist;
          bestNextIdx = i;
          bestConnectionType = 'start-to-end';
        }
        
        // Our start to candidate start (need to reverse candidate)
        const startToStartDist = getSquaredDistance(startPoint, candidateStart);
        if (startToStartDist < bestNextDistance) {
          bestNextDistance = startToStartDist;
          bestNextIdx = i;
          bestConnectionType = 'start-to-start';
        }
      }
      
      // If we found a segment to connect
      if (bestNextIdx !== -1) {
        const nextLine = [...workingLines[bestNextIdx]];
        processedLines.add(bestNextIdx);
        foundConnection = true;
        connectionsCount++;
        
        // Perform the connection based on the type
        switch (bestConnectionType) {
          case 'end-to-start':
            // Append the next line (skipping the first point to avoid duplication)
            currentLine = currentLine.concat(nextLine.slice(1));
            break;
            
          case 'end-to-end':
            // Append the reversed next line (skipping the first point)
            currentLine = currentLine.concat([...nextLine].reverse().slice(1));
            break;
            
          case 'start-to-end':
            // Prepend the next line to our current line (avoid duplication)
            currentLine = [...nextLine].slice(0, -1).concat(currentLine);
            break;
            
          case 'start-to-start':
            // Prepend the reversed next line to our current line
            currentLine = [...nextLine].reverse().slice(0, -1).concat(currentLine);
            break;
        }
      }
    }
    
    // Add the connected polyline to our collection
    polylines.push(currentLine);
    console.log(`Created polyline with ${currentLine.length} points from ${connectionsCount + 1} segments`);
  }
  
  console.log(`Stage 1: Created ${polylines.length} connected polylines`);
  
  // Stage 2: Identify and close major shoreline loops
  const closedPolygons: number[][][] = [];
  
  // Process each polyline to determine if it forms a closed loop or should be closed
  for (const polyline of polylines) {
    // Skip very short polylines as they're likely noise
    if (polyline.length < 10) continue;
    
    // Check if the polyline is already a closed loop
    if (pointsMatch(polyline[0], polyline[polyline.length - 1])) {
      // It's already closed, add it directly
      closedPolygons.push(polyline);
      continue;
    }
    
    // For open polylines, we need to determine if they should be closed
    // Measure the gap between endpoints
    const startPoint = polyline[0];
    const endPoint = polyline[polyline.length - 1];
    const gapDistance = Math.sqrt(getSquaredDistance(startPoint, endPoint));
    
    // Calculate the total length of the polyline as a reference
    let totalLength = 0;
    for (let i = 1; i < polyline.length; i++) {
      totalLength += Math.sqrt(getSquaredDistance(polyline[i-1], polyline[i]));
    }
    
    // If the gap is relatively small compared to the total length, close it
    // Or if the gap is less than a certain threshold
    if (gapDistance < totalLength * 0.2 || gapDistance < 0.1) {
      // Create a closed polygon by adding the start point to the end
      const closedPolygon = [...polyline, polyline[0]];
      closedPolygons.push(closedPolygon);
      console.log(`Closed a polyline with gap: ${gapDistance.toFixed(4)}, total length: ${totalLength.toFixed(2)}`);
    } else {
      // This is a major shoreline segment that doesn't form a loop
      // We could still add it but let's skip it for now
      console.log(`Skipping open polyline with large gap: ${gapDistance.toFixed(4)}, total length: ${totalLength.toFixed(2)}`);
    }
  }
  
  console.log(`Stage 2: Created ${closedPolygons.length} closed polygons`);
  
  // Return the closed polygons
  return closedPolygons;
}

/**
 * Creates the Seattle geometry based on the loaded GeoJSON shoreline data.
 * @param scene The Three.js scene to add the geometry to
 * @param shorelineData The shoreline GeoJSON data
 * @param referenceCoords Optional reference coordinates to mark a specific location
 */
export function createSeattleGeometry(
  scene: THREE.Scene, 
  shorelineData: GeoJSONData,
  referenceCoords?: { latitude: number, longitude: number }
): void {
  // Calculate bounding box for the data
  const bounds = calculateBoundingBox(shorelineData);
  
  // Set the projection center based on the bounding box
  setProjectionCenter(
    bounds.projected.minUtmX,
    bounds.projected.maxUtmX,
    bounds.projected.minUtmY,
    bounds.projected.maxUtmY
  );
  
  console.log('Geographic bounds:', bounds.geographic);
  console.log('Projected bounds:', bounds.projected);
  
  // Calculate the width and height of the bounds (in game units now)
  const width = bounds.projected.maxUtmX - bounds.projected.minUtmX;
  const height = bounds.projected.maxUtmY - bounds.projected.minUtmY;
  
  console.log(`Original UTM size: ${width.toFixed(0)} x ${height.toFixed(0)} meters`);
  
  // Use hybrid approach: Start with water base, then add land, then cut out water bodies
  const baseSize = Math.max(width, height) * 1.5; // Make it larger to ensure coverage
  
  // Create water base
  const waterMaterial = new THREE.MeshStandardMaterial({
    color: 0x0077be,  // Deep blue for water
    metalness: 0.1,
    roughness: 0.1
  });
  
  const waterBase = new THREE.Mesh(
    new THREE.PlaneGeometry(baseSize, baseSize),
    waterMaterial
  );
  waterBase.rotation.x = -Math.PI / 2; // Rotate to be horizontal
  waterBase.position.y = 0; // Position at ground level
  scene.add(waterBase);
  
  console.log('Added water base');
  
  // Create materials for different elements
  const landMaterial = new THREE.MeshStandardMaterial({
    color: 0x228B22, // Forest green for land
    metalness: 0.0,
    roughness: 0.8
  });
  
  // Group for all land and water geometry
  const landGroup = new THREE.Group();
  scene.add(landGroup);
  
  // Process all shoreline features to create land masses
  console.log(`Processing ${shorelineData.features.length} shoreline features...`);
  
  // Extract all line strings from GeoJSON
  const allLineStrings: number[][][] = [];
  
  for (const feature of shorelineData.features) {
    if (feature.geometry.type === 'MultiLineString') {
      for (const lineString of feature.geometry.coordinates) {
        allLineStrings.push(lineString);
      }
    } else if (feature.geometry.type === 'LineString') {
      allLineStrings.push(feature.geometry.coordinates);
    }
  }
  
  console.log(`Extracted ${allLineStrings.length} line strings from GeoJSON`);
  
  // Create connected polygons from the line strings
  const closedPolygons = createClosedPolygonsFromLines(allLineStrings);
  console.log(`Created ${closedPolygons.length} closed polygons from line strings`);
  
  // Determine which polygons represent land and which represent water bodies
  // We'll use polygon area and containment checks
  
  // First, calculate the size of each polygon
  const polygonAreas: number[] = [];
  const polygonBounds: Array<{minLon: number, maxLon: number, minLat: number, maxLat: number}> = [];
  
  for (const polygon of closedPolygons) {
    // Skip very small polygons
    if (polygon.length < 5) continue;
    
    // Calculate approximate area using shoelace formula
    let area = 0;
    let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
    
    for (let i = 0; i < polygon.length - 1; i++) {
      const p1 = polygon[i];
      const p2 = polygon[i + 1];
      
      // Update bounds
      minLon = Math.min(minLon, p1[0]);
      maxLon = Math.max(maxLon, p1[0]);
      minLat = Math.min(minLat, p1[1]);
      maxLat = Math.max(maxLat, p1[1]);
      
      // Shoelace formula component
      area += (p1[0] * p2[1]) - (p2[0] * p1[1]);
    }
    
    // Area is half the absolute value of the sum
    area = Math.abs(area) / 2;
    
    polygonAreas.push(area);
    polygonBounds.push({minLon, maxLon, minLat, maxLat});
  }
  
  // Sort polygons by area (largest first)
  const sortedIndices = polygonAreas.map((_, i) => i)
    .sort((a, b) => polygonAreas[b] - polygonAreas[a]);
  
  console.log(`Largest polygon area: ${polygonAreas[sortedIndices[0]]}`);
  console.log(`Second largest polygon area: ${polygonAreas[sortedIndices[1]]}`);
  
  // Process the largest polygons first
  const processedPolygons = [];
  for (let i = 0; i < Math.min(10, sortedIndices.length); i++) {
    const polygonIndex = sortedIndices[i];
    const polygon = closedPolygons[polygonIndex];
    const area = polygonAreas[polygonIndex];
    
    // Skip very small areas
    if (area < 0.00001) continue;
    
    processedPolygons.push(polygonIndex);
    
    // For the largest polygon, we'll assume it's water (Puget Sound)
    // For other large polygons, we'll assume they're land masses
    const isWater = i === 0; // Just treat the largest polygon as water
    const material = isWater ? waterMaterial : landMaterial;
    
    console.log(`Creating ${isWater ? 'water' : 'land'} polygon with area ${area}`);
    
    try {
      const shape = new THREE.Shape();
      
      // Add all points to the shape
      for (let j = 0; j < polygon.length; j++) {
        const point = polygon[j];
        const coord = projectToGameCoords(point[0], point[1]);
        
        if (j === 0) {
          shape.moveTo(coord[0], coord[1]);
        } else {
          shape.lineTo(coord[0], coord[1]);
        }
      }
      
      // Create geometry from shape
      const geometry = new THREE.ShapeGeometry(shape);
      const mesh = new THREE.Mesh(geometry, material);
      
      // Position the mesh
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.y = isWater ? 0.5 : 1.0; // Position water above the base, land above water
      
      landGroup.add(mesh);
    } catch (error) {
      console.error(`Error creating ${isWater ? 'water' : 'land'} polygon:`, error);
    }
  }
  
  console.log(`Created ${processedPolygons.length} total polygons`);
  
  // Mark the reference point if provided
  if (referenceCoords) {
    const refPoint = projectToGameCoords(referenceCoords.longitude, referenceCoords.latitude);
    const x = refPoint[0];
    const z = refPoint[1];
    
    // Create a marker for the reference point
    const markerGeometry = new THREE.SphereGeometry(30, 16, 16); // Bigger marker for better visibility
    const markerMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xff0000, 
      emissive: 0xff0000,
      emissiveIntensity: 0.5
    });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    
    marker.position.set(x, 100, z); // Position higher above the ground for better visibility
    scene.add(marker);
    
    // Add a label for the reference point (e.g., "Space Needle")
    addLabel("Space Needle", x, z, scene);
    
    console.log(`Added reference marker at (${x}, ${z})`);
    
    // Also add a vertical pole to make it easier to spot
    const poleGeometry = new THREE.CylinderGeometry(5, 5, 200, 8);
    const poleMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xff0000, 
      emissive: 0xff0000,
      emissiveIntensity: 0.5
    });
    const pole = new THREE.Mesh(poleGeometry, poleMaterial);
    pole.position.set(x, 100, z);
    scene.add(pole);
  }
}

/**
 * Adds a text label at the specified position
 */
function addLabel(text: string, x: number, z: number, scene: THREE.Scene): void {
  // Create canvas for the label
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return;
  
  canvas.width = 256;
  canvas.height = 64;
  
  // Draw text on canvas
  context.fillStyle = 'rgba(0, 0, 0, 0.7)';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'white';
  context.font = '24px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  
  // Create texture and sprite
  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture });
  const sprite = new THREE.Sprite(material);
  
  // Position sprite
  sprite.position.set(x, 30, z); // Above the marker
  sprite.scale.set(50, 15, 1); // Adjust size
  
  // Add to scene
  scene.add(sprite);
} 