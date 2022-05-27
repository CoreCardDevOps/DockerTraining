#base image
FROM node:alpine
WORKDIR '/app'
COPY package.json .
#dependencies
RUN npm install
#command to run in container
COPY . .
CMD ["npm","start"]
