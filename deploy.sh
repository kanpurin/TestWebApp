#!/bin/bash

if [ "$1" != "" ]; then
    cd "$1" || exit 1  # Change directory to RandomGenerator
    git fetch origin   # Fetch from remote
    git reset --hard   # Reset local changes
    cd ..              # Move back to the previous directory
    npm run copy "$1"  # Run npm script to copy files for RandomGenerator
    npm run git        # Run npm script to execute git-related tasks
else
    echo "Usage: $0 <directory>"
    exit 1
fi