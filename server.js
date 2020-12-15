const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
const app = express();

// load env vars
dotenv.config({ path: "./config/.env" });

// init middleware
app.use(express.json({ extended: false }));

// Connect DATABASE
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/course", require("./routes/course"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server Started in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
