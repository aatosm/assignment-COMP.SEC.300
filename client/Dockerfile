FROM node:16

WORKDIR /src/app/client

COPY package*.json /src/app/client

RUN npm install

COPY . /src/app/client

CMD ["npm", "run", "start"]