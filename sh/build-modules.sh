#!/bin/bash

echo "Build module \"page-in-vue\"..."
yarn --cwd=./modules/page-in-vue install
yarn --cwd=./modules/page-in-vue build

echo "Build module \"core\"..."
yarn --cwd=./modules/core install
yarn --cwd=./modules/core build