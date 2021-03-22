FROM node:13.12.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY . .
