FROM node:lts-alpine
WORKDIR /app
COPY . .
CMD npm install && npm run serve
EXPOSE 8080
