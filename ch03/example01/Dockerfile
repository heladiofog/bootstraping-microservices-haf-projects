FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

ENV SERVER_PORT=3000

COPY ./src ./src

COPY ./videos ./videos

CMD npm start
