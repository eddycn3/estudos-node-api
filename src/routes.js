const express = require("express");
const routes = express.Router();

const productController = require("./controllers/ProductController");

routes.get("/products", productController.getall);
routes.get("/products/:id", productController.get);
routes.post("/products", productController.insert);
routes.put("/products/:id", productController.update);
routes.delete("/products/:id", productController.delete);
module.exports = routes;
