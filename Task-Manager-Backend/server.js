const express = require("express");
const app = express();
const auth = require("./routes/auth");
require("dotenv").config()
const mongoose = require("mongoose");

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use(express.json());
app.use("/api/auth", auth);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on: http://localhost:" + PORT);
});