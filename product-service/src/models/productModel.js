const db = require("./db");

exports.create = (data) =>
  db.query(
    "INSERT INTO products (name, price) VALUES (?, ?)",
    [data.name, data.price]
  );

exports.getAll = () => db.query("SELECT * FROM products");

exports.getById = (id) =>
  db.query("SELECT * FROM products WHERE id=?", [id]);

exports.update = (id, data) =>
  db.query(
    "UPDATE products SET name=?, price=? WHERE id=?",
    [data.name, data.price, id]
  );

exports.remove = (id) =>
  db.query("DELETE FROM products WHERE id=?", [id]);
