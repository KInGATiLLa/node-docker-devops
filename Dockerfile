FROM node:14.17.6-alpine3.14
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm", "run", "dev"]