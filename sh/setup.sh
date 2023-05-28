#!/bin/bash

BASEDIR=$(dirname $0)

echo "Setup project..."
yarn install

echo "Build packages..."
sh ./${BASEDIR}/build-packages.sh

echo "Build modules..."
sh ./${BASEDIR}/build-modules.sh
