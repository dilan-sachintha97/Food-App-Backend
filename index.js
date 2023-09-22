const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

// Set up express app
const app = express();
const serverPort = process.env.SERVER_PORT;


mongoose.connect('mongodb://127.0.0.1:27017/food_app').then(()=>{
    console.log("connected to mongoDB");





   // Test endpoint
   app.get('/api/v1/test', (req, res) => {
    res.status(200).json({ message: 'success!' });
  });

  // Start the server after successful database connection
  app.listen(serverPort, () => {
    console.log(`Server Running on Port ${serverPort}`);
  });

}).catch((err)=>{
    console.error('Error connecting to MongoDB:', err);
});



