#Each dockerfile command below are layers

FROM node:22

WORKDIR /app

# Use production node environment by default.
ENV NODE_ENV=production
ENV PORT 3000

# Download and copy dependencies
COPY package*.json ./

RUN npm install --only=production

# Run the application as a non-root user.
USER node

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD ["node", "server.js"]
