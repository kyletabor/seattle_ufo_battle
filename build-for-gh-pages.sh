#!/usr/bin/env sh

# abort on errors
set -e

echo "Building project for GitHub Pages..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Remove existing dist directory
rm -rf dist

# Create a special production build with Vite
# Skip tsc (TypeScript compilation) step and just run Vite build
echo "Running Vite build..."
npx vite build

# Ensure .nojekyll file exists
touch dist/.nojekyll

# Copy necessary data files that might not be included in the build
echo "Copying data files..."
mkdir -p dist/seattle_data/roads
mkdir -p dist/seattle_data/shorline

# Copy the road and shoreline data if they exist
if [ -f "seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson" ]; then
  cp seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson dist/seattle_data/roads/
fi

if [ -f "seattle_data/shorline/Shoreline_8101522534321349051.geojson" ]; then
  cp seattle_data/shorline/Shoreline_8101522534321349051.geojson dist/seattle_data/shorline/
fi

# Copy the seattle_elevation_grid.json file to the dist assets
if [ -f "src/seattle_elevation_grid.json" ]; then
  mkdir -p dist/assets
  cp src/seattle_elevation_grid.json dist/assets/
fi

echo "Build completed!"
echo ""
echo "To deploy to GitHub Pages, run:"
echo "git add dist -f"
echo "git commit -m 'Add dist for GitHub Pages'"
echo "git subtree push --prefix dist origin gh-pages" 