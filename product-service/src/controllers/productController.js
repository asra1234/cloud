const Product = require("../models/productModel");

exports.createProduct = async (req, res) => {
  await Product.create(req.body);
  res.json({ message: "Product created" });
};

exports.getProducts = async (req, res) => {
  const [rows] = await Product.getAll();
  res.json(rows);
};

exports.getProduct = async (req, res) => {
  const [rows] = await Product.getById(req.params.id);
  res.json(rows[0]);
};

exports.updateProduct = async (req, res) => {
  await Product.update(req.params.id, req.body);
  res.json({ message: "Product updated" });
};

exports.deleteProduct = async (req, res) => {
  await Product.remove(req.params.id);
  res.json({ message: "Product deleted" });
};
