/**
 * USGS Elevation Data Downsampler
 * 
 * This script reads a GeoTIFF elevation file and generates a downsampled elevation grid
 * suitable for use in the Seattle UFO Battle game.
 */

import * as GeoTIFF from 'geotiff';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Size of the output elevation grid
// This controls the resolution of the terrain
const OUTPUT_GRID_SIZE = 100; 

// Configure the SEATTLE coordinates for extraction
// These are the actual Seattle coordinates we want to extract
const SEATTLE_BOUNDS = {
  minLat: 47.5000,
  maxLat: 47.7500, 
  minLng: -122.5000,
  maxLng: -122.2500,
};

console.log("Seattle Bounds for extraction:", SEATTLE_BOUNDS);

/**
 * Main function to process the GeoTIFF file and create a downsampled elevation grid
 */
async function processTiff() {
  try {
    console.log('\n== Seattle Elevation Grid Downsampler ==\n');
    
    // Path to the TIFF file
    const tiffPath = path.resolve('seattle_data/elevation_data/USGS_13_n48w123_20240327.tif');
    
    console.log(`Loading GeoTIFF file: ${tiffPath}`);
    console.log(`Target Seattle bounds: ${JSON.stringify(SEATTLE_BOUNDS)}`);
    
    // Check if file exists
    if (!fs.existsSync(tiffPath)) {
      console.error(`ERROR: TIFF file not found at ${tiffPath}`);
      process.exit(1);
    }

    // Read the GeoTIFF file
    const tiff = await GeoTIFF.fromFile(tiffPath);
    const image = await tiff.getImage();
    
    // Get image metadata and dimensions
    const width = image.getWidth();
    const height = image.getHeight();
    const fileDirectory = image.getFileDirectory();
    
    // Extract geographic information from the TIFF
    const [tiePointI, tiePointJ, tiePointK, tiePointX, tiePointY, tiePointZ] = fileDirectory.ModelTiepoint;
    const [pixelScaleX, pixelScaleY, pixelScaleZ] = fileDirectory.ModelPixelScale;
    
    console.log(`Image dimensions: ${width}x${height}`);
    console.log(`Tie point: [${tiePointX}, ${tiePointY}]`);
    console.log(`Pixel scale: [${pixelScaleX}, ${pixelScaleY}]`);
    
    // Calculate the full bounds of the TIFF
    // The tie point is typically the top-left corner (min_lon, max_lat)
    const minLon = tiePointX;
    const maxLat = tiePointY;
    const maxLon = tiePointX + (width * pixelScaleX);
    const minLat = tiePointY - (height * pixelScaleY); // Subtract because Y increases downward in image space
    
    const fullBounds = [minLon, minLat, maxLon, maxLat];
    console.log(`Full TIFF bounds: [${fullBounds.join(', ')}]`);
    console.log(`TIFF covers latitude: ${minLat.toFixed(6)}° to ${maxLat.toFixed(6)}°`);
    console.log(`TIFF covers longitude: ${minLon.toFixed(6)}° to ${maxLon.toFixed(6)}°`);
    
    // Verify Seattle is within the TIFF bounds
    if (SEATTLE_BOUNDS.minLat < minLat || SEATTLE_BOUNDS.maxLat > maxLat ||
        SEATTLE_BOUNDS.minLng < minLon || SEATTLE_BOUNDS.maxLng > maxLon) {
      console.warn("WARNING: Some parts of Seattle bounds may be outside the GeoTIFF bounds!");
      console.warn(`Please check that Seattle (${SEATTLE_BOUNDS.minLat}° to ${SEATTLE_BOUNDS.maxLat}°, ${SEATTLE_BOUNDS.minLng}° to ${SEATTLE_BOUNDS.maxLng}°) is within the TIFF.`);
    } else {
      console.log("✓ Seattle is fully contained within the TIFF bounds.");
    }
    
    // Convert geographic coordinates to pixel coordinates in the GeoTIFF
    // Note: In a GeoTIFF, the origin (0,0) is the top-left corner
    function geoToPixel(lon, lat) {
      // Calculate pixel X - from longitude (increases eastward)
      const pixelX = Math.round((lon - tiePointX) / pixelScaleX);
      
      // Calculate pixel Y - from latitude (decreases southward in geographic space, increases downward in image space)
      const pixelY = Math.round((tiePointY - lat) / pixelScaleY);
      
      return [pixelX, pixelY];
    }
    
    // Calculate pixels for Seattle extraction window
    const [minX, maxY] = geoToPixel(SEATTLE_BOUNDS.minLng, SEATTLE_BOUNDS.minLat);
    const [maxX, minY] = geoToPixel(SEATTLE_BOUNDS.maxLng, SEATTLE_BOUNDS.maxLat);
    
    console.log(`Seattle pixel bounds: [${minX}, ${minY}, ${maxX}, ${maxY}]`);
    
    // Ensure the window dimensions are valid and positive
    const windowWidth = maxX - minX + 1;
    const windowHeight = maxY - minY + 1;
    
    console.log(`Seattle window dimensions: ${windowWidth}x${windowHeight} pixels`);
    
    // Validate window dimensions
    if (windowWidth <= 0 || windowHeight <= 0) {
      console.error("ERROR: Invalid window dimensions. Check coordinate ordering and TIFF bounds.");
      process.exit(1);
    }
    
    // Clamp to ensure we're within the image bounds
    const clampedMinX = Math.max(0, minX);
    const clampedMinY = Math.max(0, minY);
    const clampedMaxX = Math.min(width - 1, maxX);
    const clampedMaxY = Math.min(height - 1, maxY);
    
    const clampedWidth = clampedMaxX - clampedMinX + 1;
    const clampedHeight = clampedMaxY - clampedMinY + 1;
    
    if (clampedMinX !== minX || clampedMinY !== minY || 
        clampedMaxX !== maxX || clampedMaxY !== maxY) {
      console.warn("Window was clamped to fit within image bounds:");
      console.warn(`Original: [${minX}, ${minY}, ${maxX}, ${maxY}]`);
      console.warn(`Clamped: [${clampedMinX}, ${clampedMinY}, ${clampedMaxX}, ${clampedMaxY}]`);
    }
    
    // Define the window for reading the raster data
    const window = [clampedMinX, clampedMinY, clampedWidth, clampedHeight];
    console.log(`Reading data from window: [${window.join(', ')}] (x, y, width, height)`);
    
    // Read the raster data for the Seattle region
    const rasters = await image.readRasters({
      window: [clampedMinX, clampedMinY, clampedMaxX + 1, clampedMaxY + 1], // +1 because end is exclusive
      samples: [0] // Just the first band (elevation)
    });
    
    // Get the elevation data from the first band
    const elevationData = rasters[0];
    console.log(`Read ${elevationData.length} elevation points`);
    
    // Create the grid for our game
    const grid = new Array(OUTPUT_GRID_SIZE);
    for (let i = 0; i < OUTPUT_GRID_SIZE; i++) {
      grid[i] = new Array(OUTPUT_GRID_SIZE).fill(0);
    }
    
    // Calculate statistics and downsample the data
    let minElevation = Number.MAX_VALUE;
    let maxElevation = Number.MIN_VALUE;
    let totalElevation = 0;
    let validPoints = 0;
    
    // Process elevation data for statistics
    for (let i = 0; i < elevationData.length; i++) {
      const elevation = elevationData[i];
      if (!isNaN(elevation) && elevation > -1000) { // Filter out no-data values
        minElevation = Math.min(minElevation, elevation);
        maxElevation = Math.max(maxElevation, elevation);
        totalElevation += elevation;
        validPoints++;
      }
    }
    
    const avgElevation = validPoints > 0 ? totalElevation / validPoints : 0;
    console.log(`\nElevation statistics:`);
    console.log(`  Min: ${minElevation.toFixed(2)} meters`);
    console.log(`  Max: ${maxElevation.toFixed(2)} meters`);
    console.log(`  Avg: ${avgElevation.toFixed(2)} meters`);
    console.log(`  Valid data points: ${validPoints} out of ${elevationData.length}`);
    
    // Downsample the raster data to our grid size
    console.log(`\nDownsampling to ${OUTPUT_GRID_SIZE}x${OUTPUT_GRID_SIZE} grid...`);
    
    // Note: Rasters are stored in row-major order (rows are consecutive in memory)
    const rasterWidth = clampedWidth;
    
    for (let y = 0; y < OUTPUT_GRID_SIZE; y++) {
      for (let x = 0; x < OUTPUT_GRID_SIZE; x++) {
        // Map grid coordinates to raster coordinates
        const rasterX = Math.floor(x * (rasterWidth - 1) / (OUTPUT_GRID_SIZE - 1));
        const rasterY = Math.floor(y * (clampedHeight - 1) / (OUTPUT_GRID_SIZE - 1));
        
        // Calculate index in the 1D raster array (row-major order)
        const rasterIndex = rasterY * rasterWidth + rasterX;
        
        // Get elevation value with bounds checking
        let elevation = 0;
        if (rasterIndex >= 0 && rasterIndex < elevationData.length) {
          elevation = elevationData[rasterIndex];
          
          // Handle no-data values (typically large negative numbers)
          if (isNaN(elevation) || elevation < -1000) {
            elevation = 0;
          }
        }
        
        // Store in our grid
        grid[y][x] = elevation;
      }
    }
    
    // Calculate the exact geographic bounds of our extracted grid
    function pixelToGeo(x, y) {
      const lon = tiePointX + (x * pixelScaleX);
      const lat = tiePointY - (y * pixelScaleY);
      return [lon, lat];
    }
    
    const [extractedMinLon, extractedMaxLat] = pixelToGeo(clampedMinX, clampedMinY);
    const [extractedMaxLon, extractedMinLat] = pixelToGeo(clampedMaxX, clampedMaxY);
    
    // Create the metadata
    const metadata = {
      size: OUTPUT_GRID_SIZE,
      resolution: 10, // approximate meters between grid points
      seattleBounds: SEATTLE_BOUNDS,
      window: [clampedMinX, clampedMinY, clampedWidth, clampedHeight],
      geographicBounds: {
        minLon: extractedMinLon,
        maxLon: extractedMaxLon,
        minLat: extractedMinLat,
        maxLat: extractedMaxLat
      },
      elevation: {
        min: minElevation,
        max: maxElevation,
        average: avgElevation
      },
      created: new Date().toISOString()
    };
    
    // Combine metadata and grid
    const result = {
      metadata,
      grid
    };
    
    // Make sure directory exists
    const outputPath = path.resolve('./src/seattle_elevation_grid.json');
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      console.log(`Creating output directory: ${outputDir}`);
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write the result to a JSON file
    console.log(`\nWriting elevation grid to: ${outputPath}`);
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
    console.log(`Output written successfully!`);
    
    // Also write a small sample file for verification
    const samplePath = path.resolve('./seattle_elevation_sample.json');
    const sample = {
      metadata,
      grid: [grid[0].slice(0, 10), grid[1].slice(0, 10), grid[2].slice(0, 10)]
    };
    fs.writeFileSync(samplePath, JSON.stringify(sample, null, 2));
    console.log(`Sample written to: ${samplePath}`);
    
  } catch (error) {
    console.error('ERROR processing TIFF:', error);
    process.exit(1);
  }
}

// Run the script
processTiff().catch(err => {
  console.error('FATAL ERROR:', err);
  process.exit(1);
}); 