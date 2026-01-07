const db = require("./db");

exports.create = (data) => {
  return db.query(
    `INSERT INTO products 
    (name, slug, category_id, brand_id, price, description, is_active, is_featured, in_stock, on_sale)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      data.name,
      data.slug,
      data.category_id,
      data.brand_id,
      data.price,
      data.description,
      data.is_active,
      data.is_featured,
      data.in_stock,
      data.on_sale
    ]
  );
};


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
