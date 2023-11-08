# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16 AS build

WORKDIR /usr/src/app

COPY krampoline/package*.json ./

RUN yarn ci

COPY krampoline/ ./

RUN yarn build

# Run stage

FROM krmp-d2hub-idock.9rum.cc/goorm/node:16

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist

RUN yarn install -g serve

EXPOSE 5173

CMD ["serve", "-s", "dist"]VITE_APP_PATH=https://port-0-team17-be-12fhqa2llo9i5lfp.sel5.cloudtype.app