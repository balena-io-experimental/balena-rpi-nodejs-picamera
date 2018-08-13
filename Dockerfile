FROM resin/raspberrypi3-node:latest

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install --production

COPY . .

CMD ["npm", "start"]