#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

npm run build

cd public

git init

git add -A
git commit -m 'deploy'

git push -f git@github.com:Lz-y/lzyaom.github.io.git main:gh-pages

cd ../
rm -rf public