FROM node:lts

WORKDIR /app

COPY ./package.json ./
RUN npm install


COPY ./server.js ./server.js
COPY ./.env ./.env
COPY ./public ./public
COPY ./views ./views

EXPOSE 42069
CMD ["node", "server.js"]
