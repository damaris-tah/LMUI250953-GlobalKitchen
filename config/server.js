// Load environment variables
require('dotenv').config();

// Import packages
const express = require('express');
const connectDB = require('./config/db');

// Create app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🍳 Global Kitchen API is running...");
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
