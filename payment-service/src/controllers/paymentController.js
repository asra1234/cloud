const Payment = require("../models/paymentModel");
const axios = require("axios");

exports.payOrder = async (req, res) => {
  const { order_id, amount } = req.body;

  await Payment.createPayment(order_id, amount);

  // Notify Notification Service
  await axios.post(process.env.NOTIFICATION_URL, {
    order_id,
    message: "Payment successful"
  });

  res.json({ message: "Payment completed" });
};
