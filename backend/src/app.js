const express = require("express");
const cors = require("cors");

const app = express();

const errorMiddleware = require("./middleware/error.middleware");
const authRoutes = require("./routes/auth.routes");
const jobRoutes = require("./routes/job.routes");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

app.use(
  cors({
    origin: ["http://localhost:3000",
    "https://your-frontend.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use(errorMiddleware);

module.exports = app;