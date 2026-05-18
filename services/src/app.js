require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipe.routes");

const app = express();
connectDB();

app.use(express.json());
app.use("/api", recipeRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});
