const express = require('express')
const dotenv = require('dotenv');

const mongoDBConnected = require('./db')

// Load environment variables from .env
dotenv.config();

// Set up express app
const app = express();
const serverPort = process.env.SERVER_PORT;

    // check connection
    mongoDBConnected();

   // Test endpoint
   app.get('/api/v1/test', (req, res) => {
    res.status(200).json({ message: 'success!' });
  });

  // Start the server after successful database connection
  app.listen(serverPort, () => {
    console.log(`Server Running on Port ${serverPort}`);
  });

  


