FROM node:23

WORKDIR /server-app

COPY server/package.json ./

RUN npm install

COPY server/ .

EXPOSE 4000

CMD ["npm", "run", "dev"]