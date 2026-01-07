const db = require("../config/db");

exports.createPayment = (orderId, amount) => {
  return db.query(
    "INSERT INTO payments (order_id, amount, status) VALUES (?, ?, 'paid')",
    [orderId, amount]
  );
};
