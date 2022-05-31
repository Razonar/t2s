FROM node:lts-stretch
LABEL maintainer="Alvaro"

WORKDIR /t2s-app
COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8050
ENTRYPOINT [ "npm", "run", "start" ]
