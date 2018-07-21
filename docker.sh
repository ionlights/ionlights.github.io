#!/bin/sh

EXPOSE_PERSONAL_JEKYLL=$((EXPOSE_BASE + 1))
EXPOSE_PERSONAL_RELOAD=$((EXPOSE_BASE + 2))

ARGS=""
ARGS="$ARGS -v `pwd`:/srv/jekyll"
ARGS="$ARGS -v `pwd`/vendor/bundle:/usr/local/bundle"
ARGS="$ARGS -p $EXPOSE_PERSONAL_JEKYLL:4000"
    # --user "$UID:$GID"
# ARGS="$ARGS -p $EXPOSE_PERSONAL_RELOAD:35729"

NAME="ghpages_john"

docker stop $NAME && docker rm $NAME

docker run \
    --name $NAME \
    --restart=always \
    $ARGS \
    jekyll/jekyll:pages \
    bundle install