#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd public
# if you are deploying to a custom domain
echo 'www.mathiassen.dev' > CNAME
git add -A && git commit -m "deploy"
git push
cd -
