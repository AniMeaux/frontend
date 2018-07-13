FROM node:8.5.0

# Create app directory
RUN mkdir -p /app
COPY . /app

# Expose the app port
EXPOSE 8080

# Copy files.
WORKDIR /app
RUN npm install

# Rebuild Sass
RUN npm rebuild node-sass

RUN npm run build

CMD [ "npm", "start" ]
