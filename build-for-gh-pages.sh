#!/bin/bash

# build-for-gh-pages.sh
# Script to build the project and prepare it for GitHub Pages deployment

echo "============================================"
echo "Building Seattle UFO Battle for GitHub Pages"
echo "============================================"

# Create dist directory if it doesn't exist
mkdir -p dist

# Run build to populate the dist directory
echo "Running build..."
npm run build

# Create a .nojekyll file to prevent GitHub Pages from ignoring files starting with underscores
echo "Creating .nojekyll file..."
touch dist/.nojekyll

# Create necessary directories in dist
echo "Creating data directories in dist..."
mkdir -p dist/seattle_data/roads
mkdir -p dist/seattle_data/shorline
mkdir -p dist/assets
mkdir -p dist/src

# Copy seattle_elevation_grid.json to both assets and src (to support different path configurations)
echo "Copying elevation grid data..."
if [ -f "src/seattle_elevation_grid.json" ]; then
  echo "  - Copying to dist/assets/"
  cp src/seattle_elevation_grid.json dist/assets/
  echo "  - Copying to dist/src/ (for fallback)"
  cp src/seattle_elevation_grid.json dist/src/
else
  echo "WARNING: src/seattle_elevation_grid.json not found!"
fi

# Copy shoreline data
echo "Copying shoreline data..."
if [ -f "seattle_data/shorline/seattle_shoreline.geojson" ]; then
  echo "  - Copying to dist/seattle_data/shorline/"
  cp seattle_data/shorline/seattle_shoreline.geojson dist/seattle_data/shorline/
else
  echo "WARNING: seattle_data/shorline/seattle_shoreline.geojson not found!"
  # Try alternative filename
  if [ -f "seattle_data/shorline/Shoreline_8101522534321349051.geojson" ]; then
    echo "  - Found alternate file, copying to dist/seattle_data/shorline/"
    cp seattle_data/shorline/Shoreline_8101522534321349051.geojson dist/seattle_data/shorline/
  else
    echo "ERROR: No shoreline data file found!"
  fi
fi

# Copy roads data
echo "Copying roads data..."
if [ -f "seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson" ]; then
  echo "  - Copying to dist/seattle_data/roads/"
  cp seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson dist/seattle_data/roads/
else
  echo "WARNING: seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson not found!"
fi

# Verify the copied files
echo ""
echo "Verifying copied files..."
MISSING_FILES=0

# Check elevation grid data
if [ ! -f "dist/assets/seattle_elevation_grid.json" ]; then
  echo "❌ MISSING: dist/assets/seattle_elevation_grid.json"
  MISSING_FILES=$((MISSING_FILES+1))
else
  echo "✅ FOUND: dist/assets/seattle_elevation_grid.json"
fi

if [ ! -f "dist/src/seattle_elevation_grid.json" ]; then
  echo "❌ MISSING: dist/src/seattle_elevation_grid.json"
  MISSING_FILES=$((MISSING_FILES+1))
else
  echo "✅ FOUND: dist/src/seattle_elevation_grid.json"
fi

# Check shoreline data
SHORELINE_FILE="seattle_shoreline.geojson"
if [ ! -f "dist/seattle_data/shorline/$SHORELINE_FILE" ]; then
  # Try the alternative filename
  SHORELINE_FILE="Shoreline_8101522534321349051.geojson"
  if [ ! -f "dist/seattle_data/shorline/$SHORELINE_FILE" ]; then
    echo "❌ MISSING: No shoreline file found in dist/seattle_data/shorline/"
    MISSING_FILES=$((MISSING_FILES+1))
  else
    echo "✅ FOUND: dist/seattle_data/shorline/$SHORELINE_FILE"
  fi
else
  echo "✅ FOUND: dist/seattle_data/shorline/$SHORELINE_FILE"
fi

# Check roads data
if [ ! -f "dist/seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson" ]; then
  echo "❌ MISSING: dist/seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson"
  MISSING_FILES=$((MISSING_FILES+1))
else
  echo "✅ FOUND: dist/seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson"
fi

# Summary
echo ""
if [ $MISSING_FILES -gt 0 ]; then
  echo "⚠️ WARNING: $MISSING_FILES required files are missing from the build!"
  echo "The game may not function correctly on GitHub Pages."
else
  echo "✅ All required files are present in the build."
fi

echo "------------------------------------------------"
echo "Build complete - ready for GitHub Pages deployment"
echo "------------------------------------------------" 