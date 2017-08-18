# Pull base image from stock node image.
FROM node:8.4

# Maintainer
MAINTAINER Rick Baker <rick@ricktbaker.com>

# Need global gulp
RUN npm install gulp -g

# Make app directory
RUN mkdir /opt/app

# Add the current working folder to the /opt/src dir
ADD . /opt/app

# Set the current working directory to the new mapped folder.
WORKDIR /opt/app

# Install package.json
RUN npm install

# Expose the node.js port to the Docker host.
EXPOSE 3000

# Start the app
CMD [ "node", "app.js" ]
