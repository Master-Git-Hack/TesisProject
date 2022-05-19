#!/bin/bash
app="tesis.container"
docker-compose -p ${app} up --build --force-recreate -d
#docker-compose up -d --no-deps --build  ${app}