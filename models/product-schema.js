const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_number: {
    type: String,
  },
  url: {
    type: String,
  },
  detailUrl: {
    type: String,
  },
  title: {
    type: Object,
  },
  price: {
    type: Object,
  },
  quantity: {
    type: Number,
  },
  description: {
    type: String,
  },
  discount: {
    type: String,
  },
  tagline: {
    type: String,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
