FROM node:lts-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV PORT $PORT
CMD ["npm", "run",  "start"]
