#!/bin/bash

if [ "$1" != "" ]; then
    cd "$1" || exit 1  # Change directory to RandomGenerator
    git fetch origin
    git reset --hard "origin/$(git rev-parse --abbrev-ref HEAD)"
    cd ..              # Move back to the previous directory
    npm run copy "$1"  # Run npm script to copy files for RandomGenerator
    find docs -type f -exec sed -i 's/RandomGenerator/TestWebApp/g' {} +
    # npm run git        # Run npm script to execute git-related tasks
else
    echo "Usage: $0 <directory>"
    exit 1
fi