const express = require('express')
const dotenv = require('dotenv');
var bodyParser = require('body-parser')
const mongoDBConnected = require('./db')
const cors = require('cors'); // Import cors


// Load environment variables from .env
dotenv.config();

// Set up express app
const app = express();
const serverPort = process.env.SERVER_PORT;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// check connection
mongoDBConnected();

// Configure CORS to allow requests from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
}));

//router
const UserRoute = require('./routes/UserRouter');
app.use('/api/v1/user', UserRoute);

// Test endpoint
app.get('/api/v1/test', (req, res) => {
res.status(200).json({ message: 'success!' });
});

// Start the server after successful database connection
app.listen(serverPort, () => {
  console.log(`Server Running on Port ${serverPort}`);
});

  


