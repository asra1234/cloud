const Product = require("../models/productModel");

exports.createProduct = async (req, res) => {
  try {
    if (req.body == null || req.body.category_id == null) {
      return res.status(400).json({ error: "category_id is required" });
    }

    await Product.create(req.body);
    res.json({ message: "Product created" });
  } catch (err) {
    console.error(err);
    if (err && err.message && err.message.includes("category_id")) {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: err.message || "Internal server error" });
  }
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
