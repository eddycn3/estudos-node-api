const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

mongoose.connect("mongodb://localhost:27017/node-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir("./src/models");

const product = mongoose.model("Product");

product.create({
  title: "Xamarin",
  description: "Build wonderful native apps with .net runtime!",
  url: "https://github.com/xamarin"
});

app.get("/", (req, resp) => {
  product;
  return resp.send("Node Server is Running...");
});

app.listen(3000);
