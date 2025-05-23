require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("server running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on part ${PORT}`);
});
