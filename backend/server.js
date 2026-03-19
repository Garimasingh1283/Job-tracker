require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 5000;
const jobRoutes = require("./src/routes/job.routes");

// connect DB
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use("/api/jobs", jobRoutes);