#!/usr/bin/env sh

# Local build script - run this before committing to GitHub
echo "Running local build for GitHub Pages..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Create a temporary index file for building
echo "Creating build version of index.html..."
cat > index.build.html << EOL
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Seattle UFO Battle</title>
    <style>
      /* Copy all your CSS styles here */
      body { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #111; color: white; overflow: hidden; }
      /* Add the rest of your styles... */
    </style>
  </head>
  <body>
    <!-- Copy all your HTML here, but use a script tag that points to the built JavaScript -->
    <div id="app">
      <!-- Your app HTML content -->
    </div>
    <!-- Use the compiled JavaScript file -->
    <script type="module" src="./assets/index.js"></script>
  </body>
</html>
EOL

# Build with Vite, using the temporary index file
echo "Building project..."
npx vite build --emptyOutDir

# Copy the original index.html to dist (to preserve your full app HTML)
echo "Copying and updating index.html..."
cp index.html dist/
sed -i.bak "s|src=\"./src/main.ts\"|src=\"./assets/index.js\"|g" dist/index.html
rm -f dist/index.html.bak

# Clean up
rm -f index.build.html

# Copy data files to the right locations
echo "Copying data files to build output..."
mkdir -p dist/assets
mkdir -p dist/seattle_data/roads
mkdir -p dist/seattle_data/shorline

# Copy elevation data if it exists
if [ -f "src/seattle_elevation_grid.json" ]; then
  cp src/seattle_elevation_grid.json dist/assets/
fi

# Copy road data if it exists
if [ -f "seattle_data/roads/Snow_and_Ice_Routes_-876656044780789844.geojson" ]; then
  cp -r seattle_data/roads/ dist/seattle_data/
fi

# Copy shoreline data if it exists
if [ -f "seattle_data/shorline/Shoreline_8101522534321349051.geojson" ]; then
  cp -r seattle_data/shorline/ dist/seattle_data/
fi

# Create .nojekyll file to prevent GitHub Pages from ignoring files starting with underscore
echo "Creating .nojekyll file..."
touch dist/.nojekyll

echo "Build complete!"
echo "Now you can deploy the dist folder contents to GitHub Pages." 