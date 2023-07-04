FROM node:18

WORKDIR /usr/app
COPY ./dist ./

RUN npm install
CMD ["node", "main.js"]