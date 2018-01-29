FROM node:carbon
MAINTAINER twistedogic@gmail.com
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN mkdir -p /usr/src/app/data
CMD ["npm", "start"]
