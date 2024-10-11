# Use the official Node.js image as the base image
FROM node:16

EXPOSE 4500

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN npm install && npm audit fix --force

# Define the entry point for the container
CMD ["npm", "start"]