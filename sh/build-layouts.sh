#!/bin/bash

echo "Build layouts"

echo "Build \"vue-layout\""
yarn --cwd=./packages/layouts/vue-layout install
yarn --cwd=./packages/layouts/vue-layout build