const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// health check route
app.get("/", (req, res) => {
  res.send("Hey, Backend is running!");
});

module.exports = app;