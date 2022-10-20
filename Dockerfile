FROM node:16

COPY package.json ./
COPY yarn.lock ./

RUN yarn install 

COPY tsconfig.json ./
COPY src/ .

EXPOSE 3000
CMD [ "yarn", "start" ]
