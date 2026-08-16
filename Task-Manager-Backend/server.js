const express = require("express");
const app = express();
const auth = require("./routes/auth");

app.use(express.json());
app.use("/api/auth", auth);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on: http://localhost:" + PORT);
});