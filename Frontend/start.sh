#!/bin/bash
app="docker.tesis.react"
docker stop ${app}
docker rm ${app}
docker build -t ${app} .
docker run -d --network=host -p 80:80 \
  --name=${app} \
  -v $PWD:/app ${app} \

