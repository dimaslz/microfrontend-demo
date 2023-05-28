#!/bin/bash
BASEDIR=$(dirname $0)

echo "Build all packages"

echo "Build \"utils\" packages"
sh ./${BASEDIR}/build-utils.sh

echo "Build \"component\" packages"
sh ./${BASEDIR}/build-components.sh

echo "Build \"layouts\" packages"
sh ./${BASEDIR}/build-layouts.sh