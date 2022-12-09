FROM node:lts-alpine
WORKDIR /ddd/app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run",  "dev"]
