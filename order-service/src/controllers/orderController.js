const db = require("../db");

/**
 * Create a new order
 */
exports.createOrder = async (req, res) => {
  try {
    const { total } = req.body;

    const [result] = await db.query(
      "INSERT INTO orders (user_id, grand_total, status) VALUES (?, ?, 'new')",
      [req.user.id, total]
    );

    res.status(201).json({
      message: "Order created",
      orderId: result.insertId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    await db.query(
      "UPDATE orders SET status = ? WHERE id = ?",
      [status, orderId]
    );

    res.json({ message: "Order status updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get orders of logged-in user
 */
exports.getOrders = async (req, res) => {
  try {
    const [orders] = await db.query(
      "SELECT * FROM orders WHERE user_id = ?",
      [req.user.id]
    );

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
