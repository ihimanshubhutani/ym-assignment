
FROM node:12.14.1-slim as app-builder

WORKDIR /usr/src/builder

COPY package*.json yarn.lock ./

RUN yarn --pure-lockfile && yarn cache clean

COPY . .

RUN yarn build

FROM node:12.14.1-slim as app-container

WORKDIR /usr/src/app

COPY --from=app-builder /usr/src/builder/package.json ./package.json
COPY --from=app-builder /usr/src/builder/lib ./lib
COPY --from=app-builder /usr/src/builder/node_modules ./node_modules

ENV NODE_ENV="production"

CMD [ "yarn", "start" ]
