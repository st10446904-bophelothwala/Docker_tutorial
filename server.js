const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Import routes
const indexRoute = require('./routes/index');
app.use('/', indexRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


/*import express, { response } from 'express';
//const express = require('express');

// run node project: node filename.js, stop project: Ctrl + C

const server = express();

const PORT = process.env.PORT || 3030;

server.get('/', (request, response) => {
    request.send('<h1>Docker Tutorial</h1>');
});

server.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});*/