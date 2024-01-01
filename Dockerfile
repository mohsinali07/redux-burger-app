FROM node:18-alpine
COPY package.json /app/
COPY . /app/
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
