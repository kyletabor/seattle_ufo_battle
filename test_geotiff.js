// A simple script to test if the geotiff module is working
import fs from 'fs';
import path from 'path';
import * as geotiff from 'geotiff';
import { fileURLToPath } from 'url';

// Get the directory name 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting geotiff test...');

// File paths
const inputFile = path.join(__dirname, 'seattle_data', 'elevation_data', 'USGS_13_n48w123_20240327.tif');
console.log(`Input file path: ${inputFile}`);
console.log(`File exists: ${fs.existsSync(inputFile)}`);

// Async function to test loading
async function testGeoTiff() {
  try {
    console.log('Attempting to load GeoTIFF file...');
    const tiff = await geotiff.fromFile(inputFile);
    console.log('GeoTIFF loaded successfully!');
    
    const image = await tiff.getImage();
    console.log(`Image dimensions: ${image.getWidth()} x ${image.getHeight()}`);
    
    // Basic info about the GeoTIFF
    console.log('GeoTransform:', image.getGeoTransform());
    console.log('fileDirectory:', image.getFileDirectory());
    
    console.log('Test successful!');
  } catch (error) {
    console.error('Error loading GeoTIFF:', error);
  }
}

// Run the test
testGeoTiff().then(() => {
  console.log('Test completed');
});