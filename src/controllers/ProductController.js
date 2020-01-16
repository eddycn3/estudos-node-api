const mongoose = require("mongoose");

const product = mongoose.model("Product");

module.exports = {
  async getall(req, resp) {
    const products = await product.find();

    return resp.json(products);
  }
};
