FROM node:lts-alpine as build-stage
ARG VUE_APP_HOST
ARG VUE_APP_OPEN_WEATHER_API
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]