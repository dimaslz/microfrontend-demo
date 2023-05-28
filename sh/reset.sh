#!/bin/bash

echo "Removing all node_modules"
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

echo "Removing all \"dist\""
find . -name "dist" -type d -prune -exec rm -rf '{}' +