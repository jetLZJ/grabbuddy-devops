FROM node:16-alpine as build

RUN apk update && apk upgrade && \
  apk add --update npm

RUN mkdir /app

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm build

# ---------------

FROM node:16-alpine

RUN mkdir -p /app/build

RUN apk update && apk upgrade && apk add --update npm

WORKDIR /app

COPY --from=build /app/package.json .

RUN npm install --production

COPY --from=build /app/build ./build
COPY --from=build /app/src/auth_config.json ./src/auth_config.json
COPY --from=build /app/server.js .
COPY --from=build /app/api-server.js .

EXPOSE 3000
EXPOSE 3001

ENV SERVER_PORT=3000
ENV API_PORT=3001
ENV NODE_ENV production

CMD ["yarn", "prod"]
