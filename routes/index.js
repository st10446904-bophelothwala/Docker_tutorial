const express = require('express');
const router = express.Router();

// Define a basic route
router.get('/', (req, res) => {
  res.send('Hello, Express with modular routes!');
});

module.exports = router;
