const Product = require("../models/productModel");

exports.getProducts = async (req, res) => {
  const [products] = await Product.getAllProducts();
  res.json(products);
};

exports.addProduct = async (req, res) => {
  await Product.createProduct(req.body);
  res.json({ message: "Product created" });
};
