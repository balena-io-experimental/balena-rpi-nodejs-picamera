FROM resin/%%RESIN_MACHINE_NAME%%-node:latest

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install --production

COPY . .

CMD ["npm", "start"]