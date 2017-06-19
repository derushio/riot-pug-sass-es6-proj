#! /bin/bash
yarn init

yarn add riot
yarn add -D webpack riot-tag-loader babel-core babel-loader babel-preset-es2015 babel-preset-es2015-riot pug pug-cli node-sass

node ./install-npm-script.js

rm ./install.sh
rm ./install-npm-script.js
