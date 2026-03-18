const express = require("express");
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middleware/error.middleware");
const authRoutes = require("./routes/auth.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use(errorMiddleware);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;