FROM node:18-alpine AS builder
ENV NODE_ENV production
ENV DISABLE_ESLINT_PLUGIN true
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build

FROM nginx:1.25.2
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/conf/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]