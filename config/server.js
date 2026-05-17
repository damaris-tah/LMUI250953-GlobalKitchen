// Load environment variables from .env file
require('dotenv').config();

// Import required packages
const express = require('express');
const connectDB = require('./config/db'); // our MongoDB connection file

// Create an Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON data
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🍳 Global Kitchen API is running...");
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
