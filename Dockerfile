# Use the official Node.js image
FROM node:16-slim
# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on
EXPOSE 3000
EXPOSE 3001

# Start the application
CMD ["node", "server.js"]
