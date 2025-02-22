FROM node:18-buster-slim

WORKDIR /app

COPY ./package*.json .

COPY ./index.js .

RUN npm ci

EXPOSE 5000

CMD [ "node", "index.js" ]