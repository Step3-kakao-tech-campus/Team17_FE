
# Build stage
FROM node:16 AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

COPY / ./
RUN yarn build

