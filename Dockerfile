FROM node:16

WORKDIR /myapp

COPY package*.json ./
RUN npm install
COPY index.js .

EXPOSE 3000
CMD ["npm", "start"]
