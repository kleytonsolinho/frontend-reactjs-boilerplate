FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 80
CMD ["yarn", "build"]
CMD ["yarn", "start"]