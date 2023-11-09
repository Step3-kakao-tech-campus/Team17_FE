// DockerFile
# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY / ./
RUN yarn build

# Run stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
RUN yarn global add serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]
