const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const ProductSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema);
