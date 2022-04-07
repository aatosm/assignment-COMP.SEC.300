FROM node:16

WORKDIR /src/app/server

COPY package*.json /src/app/server

RUN npm install

COPY . /src/app/server

CMD ["npm", "run", "start"]