#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# create a .nojekyll file to bypass GitHub Pages Jekyll processing
touch .nojekyll

# if you're deploying to a custom domain, uncomment and modify the next line
# echo 'your-custom-domain.com' > CNAME

# initialize git in the dist directory
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# push to the gh-pages branch forcing the update
git push -f git@github.com:kyletabor/seattle_ufo_battle.git master:gh-pages

cd -

echo "Deployed successfully to GitHub Pages!" 