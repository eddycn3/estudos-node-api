const express = require("express");
const routes = express.Router();

const productController = require("./controllers/ProductController");

routes.get("/products", productController.getall);
routes.post("/products", productController.insert);

module.exports = routes;
