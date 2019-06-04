#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd public

# if you are deploying to a custom domain
echo 'www.mathiassen.dev' > CNAME
cd -

git add public -f && git commit -m "deploy"

git subtree push --prefix public origin public
