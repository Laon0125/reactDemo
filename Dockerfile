FROM node:14 AS builder
WORKDIR /app
COPY package-lock.json ./
COPY package.json ./
RUN npm ci 
COPY . .
RUN npm run build
FROM nginx:1.19.0
COPY config/nginx/default.conf /etc/nginx/conf.d/default.conf
RUN rm -rf ./usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html/
EXPOSE 3000
ENTRYPOINT ["nginx", "-g", "daemon off;"]

