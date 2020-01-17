const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  //return all products
  async getall(req, resp) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });
    return resp.json(products);
  },

  //find a product
  async get(req, resp) {
    const product = await Product.findById(req.params.id);
    return resp.json(product);
  },

  //insert new product
  async insert(req, resp) {
    const product = await Product.create(req.body);
    return resp.json(product);
  },

  async update(req, resp) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return resp.json(product);
  },

  async delete(req, resp) {
    const product = await Product.findByIdAndDelete(req.params.id);
    return resp.send();
  }
};
