const db = require("./db");

exports.getAllProducts = () => {
  return db.promise().query("SELECT * FROM products");
};

exports.createProduct = (data) => {
  return db.promise().query(
    "INSERT INTO products (name, price, category_id, brand_id) VALUES (?, ?, ?, ?)",
    [data.name, data.price, data.category_id, data.brand_id]
  );
};
