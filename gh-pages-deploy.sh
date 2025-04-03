#!/usr/bin/env sh

# abort on errors
set -e

# Remove existing dist directory to ensure a clean deployment
rm -rf dist

# Create a temporary directory for deployment files
mkdir -p dist

# Copy necessary files to the dist directory
cp index.html dist/
cp -r src/ dist/src/
cp -r public/ dist/public/
cp -r seattle_data/ dist/seattle_data/
cp package.json dist/
cp tsconfig.json dist/
cp vite.config.js dist/

# Create a .nojekyll file to bypass GitHub Pages Jekyll processing
touch dist/.nojekyll

# Navigate into the build output directory
cd dist

# if you're deploying to a custom domain, uncomment and modify the next line
# echo 'your-custom-domain.com' > CNAME

# initialize git in the dist directory
git init
git branch -m gh-pages
git add -A
git commit -m 'Deploy to GitHub Pages'

# push to the gh-pages branch forcing the update - using HTTPS instead of SSH
git push -f https://github.com/kyletabor/seattle_ufo_battle.git gh-pages:gh-pages

cd -

echo "Deployed successfully to GitHub Pages!" 