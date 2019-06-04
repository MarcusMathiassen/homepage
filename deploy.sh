#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.mathiassen.dev' > CNAME
cd -

git add dist && git commit -m "deploy"

git subtree push --prefix dist origin gh-pages
