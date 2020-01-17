const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

app.use(express.json());

//Base Local Connection
mongoose.connect("mongodb://localhost:27017/node-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(3000);
