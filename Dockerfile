# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16 AS build
WORKDIR /usr/src/app
COPY krampoline/package*.json ./
RUN yarn install
COPY krampoline/ ./
RUN yarn build

# Run stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
RUN yarn global add serve
EXPOSE 5173
CMD ["serve", "-s", "dist"]
