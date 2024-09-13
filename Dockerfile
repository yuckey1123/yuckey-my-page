FROM node:22-alpine

WORKDIR /app/

COPY package*.json ./

RUN apk update && apk add git vim curl

RUN npm install
