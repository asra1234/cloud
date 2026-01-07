exports.sendNotification = (req, res) => {
  const { order_id, message } = req.body;

  console.log(`Notification sent for order ${order_id}: ${message}`);

  res.json({ message: "Notification sent" });
};
