# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16 AS build
WORKDIR /usr/src/app
COPY /package*.json ./
RUN npm i
COPY / ./
RUN npm run build

# Run stage

FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
RUN npm install -g serve
EXPOSE 3000

ENV VITE_APP_BASE_URL= https://port-0-team17-be-12fhqa2llo9i5lfp.sel5.cloudtype.app
ENV VITE_REACT_APP_KAKAO_REST_API_KEY= e58bdec4ac3d35ddddcfcfdb3d44fdde
ENV VITE_REACT_APP_KAKAO_JAVASCRIPT_KEY= e833416820b3f82b62dba6f6c3de3bb8

CMD ["serve", "-s", "dist"]
