#!/bin/bash

# build-for-docs.sh
# Script to build the project and prepare it for GitHub Pages deployment using the docs folder

echo "============================================"
echo "Building Seattle UFO Battle for GitHub Pages (docs folder)"
echo "============================================"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Run build to populate the docs directory
echo "Running build..."
npm run build

# Create a .nojekyll file to prevent GitHub Pages from ignoring files starting with underscores
echo "Creating .nojekyll file..."
touch docs/.nojekyll

# Create necessary directories in docs if they don't exist
echo "Ensuring data directories exist in docs..."
mkdir -p docs/seattle_data/roads
mkdir -p docs/seattle_data/shorline
mkdir -p docs/assets
mkdir -p docs/src

# Copy seattle_elevation_grid.json to both assets and src (to support different path configurations)
echo "Copying elevation grid data..."
if [ -f "src/seattle_elevation_grid.json" ]; then
  echo "  - Copying to docs/assets/"
  cp src/seattle_elevation_grid.json docs/assets/
  echo "  - Copying to docs/src/ (for fallback)"
  cp src/seattle_elevation_grid.json docs/src/
else
  echo "WARNING: src/seattle_elevation_grid.json not found!"
fi

# Copy shoreline data
echo "Copying shoreline data..."
if [ -f "seattle_data/shorline/seattle_shoreline.geojson" ]; then
  echo "  - Copying to docs/seattle_data/shorline/"
  cp seattle_data/shorline/seattle_shoreline.geojson docs/seattle_data/shorline/
else
  echo "WARNING: seattle_data/shorline/seattle_shoreline.geojson not found!"
fi

# Copy roads data
echo "Copying roads data..."
if [ -f "seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson" ]; then
  echo "  - Copying to docs/seattle_data/roads/"
  cp seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson docs/seattle_data/roads/
else
  echo "WARNING: seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson not found!"
fi

# Verify the copied files
echo ""
echo "Verifying copied files..."
MISSING_FILES=0

# Check elevation grid data
if [ ! -f "docs/assets/seattle_elevation_grid.json" ]; then
  echo "❌ MISSING: docs/assets/seattle_elevation_grid.json"
  MISSING_FILES=$((MISSING_FILES+1))
else
  echo "✅ FOUND: docs/assets/seattle_elevation_grid.json"
fi

if [ ! -f "docs/src/seattle_elevation_grid.json" ]; then
  echo "❌ MISSING: docs/src/seattle_elevation_grid.json"
  MISSING_FILES=$((MISSING_FILES+1))
else
  echo "✅ FOUND: docs/src/seattle_elevation_grid.json"
fi

# Check shoreline data
if [ ! -f "docs/seattle_data/shorline/seattle_shoreline.geojson" ]; then
  echo "❌ MISSING: docs/seattle_data/shorline/seattle_shoreline.geojson"
  MISSING_FILES=$((MISSING_FILES+1))
else
  echo "✅ FOUND: docs/seattle_data/shorline/seattle_shoreline.geojson"
fi

# Check roads data
if [ ! -f "docs/seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson" ]; then
  echo "❌ MISSING: docs/seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson"
  MISSING_FILES=$((MISSING_FILES+1))
else
  echo "✅ FOUND: docs/seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson"
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
echo "Your game should be available at: https://[your-username].github.io/seattle_ufo_battle/"
echo "Make sure in your GitHub repository settings, you've set GitHub Pages to deploy from:"
echo "  Source: Deploy from a branch"
echo "  Branch: main"
echo "  Folder: /docs"
echo "------------------------------------------------" 