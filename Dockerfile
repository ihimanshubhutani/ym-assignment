FROM node:12.14.1-slim

ARG PORT=3000

WORKDIR /usr/src/app

COPY --chown=node:node . /usr/src/app

RUN yarn install

RUN yarn build

USER node

EXPOSE $PORT

CMD [ "yarn", "start" ]
