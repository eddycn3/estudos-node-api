const express = require("express");
const routes = express.Router();

routes.get("/", (req, resp) => {
  Product.create({
    title: "Xamarin",
    description: "Build wonderful native apps with .net runtime!",
    url: "https://github.com/xamarin"
  });
  return resp.send("Node Server is Running...");
});

module.exports = routes;
