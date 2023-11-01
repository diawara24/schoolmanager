# build application
FROM node:latest as builder
RUN mkdir -p /app

LABEL authors="Mourtalla Faty DIAWARA"

WORKDIR /app

COPY package*.json  ./

RUN npm install

COPY . .

EXPOSE 4200

RUN npm run build --prod

# CMD ["npm", "start"]

# web server
FROM nginx:alpine

COPY --from=builder app/dist/schoolmanager /usr/share/nginx/html

COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf

USER nginx



