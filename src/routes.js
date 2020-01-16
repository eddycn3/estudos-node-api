const express = require("express");
const routes = express.Router();

const productController = require("./controllers/ProductController");

routes.get("/products", productController.getall);

module.exports = routes;
