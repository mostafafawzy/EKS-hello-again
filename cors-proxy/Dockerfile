# Use the lightweight Alpine version of Node.js
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application
COPY . .

# Expose the service port
EXPOSE 8080

# Start the Node.js application
CMD ["node", "server.js"]
