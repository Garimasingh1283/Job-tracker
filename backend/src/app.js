const express = require("express");
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middleware/error.middleware");
const authRoutes = require("./routes/auth.routes");

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;