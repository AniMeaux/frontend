FROM node:8.5.0

# Create app directory
RUN mkdir -p /front

RUN ls

WORKDIR ./front
RUN ls
COPY package*.json ./
RUN ls
RUN npm install
RUN npm rebuild node-sass

COPY . .

# Rebuild Sass
EXPOSE 8080

CMD [ "npm", "run", "dev" ]
