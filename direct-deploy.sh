#!/usr/bin/env sh

# abort on errors
set -e

echo "Creating direct deployment for GitHub Pages..."

# Create and clear the dist directory
rm -rf dist
mkdir -p dist

# Copy HTML, CSS, and JavaScript files
echo "Copying HTML and assets..."
cp index.html dist/
cp -r public dist/

# Copy the entire src directory
echo "Copying source files..."
cp -r src dist/

# Create directory structure for data files
mkdir -p dist/seattle_data/roads
mkdir -p dist/seattle_data/shorline
mkdir -p dist/assets

# Copy data files
echo "Copying data files..."
if [ -f "src/seattle_elevation_grid.json" ]; then
  cp src/seattle_elevation_grid.json dist/assets/
  # Also keep a copy in the original location for direct script loading
  cp src/seattle_elevation_grid.json dist/src/
fi

if [ -f "seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson" ]; then
  cp seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson dist/seattle_data/roads/
fi

if [ -f "seattle_data/shorline/Shoreline_8101522534321349051.geojson" ]; then
  cp seattle_data/shorline/Shoreline_8101522534321349051.geojson dist/seattle_data/shorline/
fi

# Create .nojekyll file to bypass GitHub Pages Jekyll processing
touch dist/.nojekyll

echo "Direct deployment package created."
echo "To push to GitHub Pages, run:"
echo "cd dist"
echo "git init"
echo "git add -A"
echo "git commit -m 'Direct deploy to GitHub Pages'"
echo "git push -f https://github.com/kyletabor/seattle_ufo_battle.git master:gh-pages"
echo "cd .." 