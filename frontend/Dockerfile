FROM --platform=linux/amd64 node:16

# Create app directory
WORKDIR /usr/src/frontend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000

WORKDIR /usr/src/frontend/src

CMD [ "npm", "start" ]