FROM node:16.20-slim
WORKDIR /app
COPY public /app/public
COPY src /app/src
COPY package.json /app
RUN npm i
EXPOSE 3001
CMD [ "npm", "start" ]