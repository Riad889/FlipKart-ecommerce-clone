const Products = require("./models/product-schema");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Products.find();
    if (products) {
      return res.status(202).json({ products });
    } else {
      return res.status(402).json({ message: "No products found" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const getSpecificProduct = async (req, res, next) => {
  try {
    const pn = req.params.id;
    const data = await Products.findOne({ product_number: pn });
    if (data) {
      return res.status(202).json({ data });
    } else {
      return res.status(400).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// add data to server;

const addProduct = async (req, res) => {
  const {
    product_number,
    url,
    detailUrl,
    title,
    price,
    quantity,
    description,
    discount,
    tagline,
  } = req.body;
  const product = await Products.create({
    product_number,
    url,
    detailUrl,
    title,
    price,
    quantity,
    description,
    discount,
    tagline,
  });
  return res
    .status(200)
    .json({ message: "Product create successfully", product });
};
module.exports = { getAllProducts, getSpecificProduct, addProduct };
