#!/bin/bash

echo "Build utils"

echo "Build \"event-emitter\""
yarn --cwd=./packages/utils/event-emitter install
yarn --cwd=./packages/utils/event-emitter build