const mongoose = require("mongoose");

const product = mongoose.model("Product");

module.exports = {
  //return all products
  async getall(req, resp) {
    const products = await product.find();
    return resp.json(products);
  },
  //insert new product
  async insert(req, resp) {}
};
