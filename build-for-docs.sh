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
mkdir -p docs/audio

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

# Copy audio files (more thorough approach)
echo "Copying audio files..."
if [ -d "public/audio" ]; then
  echo "  - Copying audio directory from public/audio to docs/audio"
  cp -r public/audio/* docs/audio/
else
  echo "WARNING: public/audio directory not found!"
fi

# Create audio-paths.js to fix audio paths on GitHub Pages
echo "Creating audio path correction script..."
cat > docs/audio-paths.js << 'EOL'
// audio-paths.js - Dynamically adjusts audio paths for GitHub Pages deployment

(function() {
  // Function to rewrite audio paths based on current location
  function adjustAudioPaths() {
    // Check if we're on GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    if (isGitHubPages) {
      console.log('GitHub Pages detected - adjusting audio paths');
      
      // Extract repository name from URL to use as the base path
      const pathParts = window.location.pathname.split('/');
      const repoName = pathParts[1]; // Second part of path is the repo name
      const basePath = repoName ? `/${repoName}` : '';
      
      console.log(`Repository name detected: ${repoName}`);
      console.log(`Base path set to: ${basePath}`);
      
      // Set a global variable for the audio path
      window.AUDIO_BASE_PATH = `${basePath}/audio`;
      console.log(`Audio base path set to: ${window.AUDIO_BASE_PATH}`);
      
      // Monkey patch the fetch API to rewrite audio URLs
      const originalFetch = window.fetch;
      window.fetch = function(url, options) {
        if (typeof url === 'string') {
          // Check for absolute audio paths that need to be rewritten
          if (url.startsWith('/audio/')) {
            const newUrl = `${basePath}/audio/${url.substring(7)}`;
            console.log(`Audio URL rewritten: ${url} → ${newUrl}`);
            return originalFetch(newUrl, options);
          }
          
          // Also handle without leading slash
          if (url.startsWith('audio/')) {
            const newUrl = `${basePath}/audio/${url.substring(6)}`;
            console.log(`Audio URL rewritten: ${url} → ${newUrl}`);
            return originalFetch(newUrl, options);
          }
        }
        return originalFetch(url, options);
      };
      
      // Also create a utility function for direct use
      window.resolveAudioUrl = function(audioPath) {
        if (audioPath.startsWith('/audio/')) {
          return `${basePath}/audio/${audioPath.substring(7)}`;
        }
        if (audioPath.startsWith('audio/')) {
          return `${basePath}/audio/${audioPath.substring(6)}`;
        }
        return audioPath;
      };
      
      // Set a hook for when audio files are loaded
      document.addEventListener('audioLoading', function(e) {
        console.log('Audio loading event detected, path fixing enabled');
      });
    }
  }
  
  // Run the adjustment function immediately
  adjustAudioPaths();
  
  // Also run when the DOM is loaded (as a backup)
  document.addEventListener('DOMContentLoaded', adjustAudioPaths);
})();
EOL

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

# Check audio files
AUDIO_FILES=("spaceman_showdown.mp3" "laser_shoot.mp3" "loud-thud.mp3" "explosion.mp3")
for audio_file in "${AUDIO_FILES[@]}"; do
  if [ ! -f "docs/audio/$audio_file" ]; then
    echo "❌ MISSING: docs/audio/$audio_file"
    MISSING_FILES=$((MISSING_FILES+1))
  else
    echo "✅ FOUND: docs/audio/$audio_file"
  fi
done

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