const axios = require("axios");

/**
 * Simulate payment processing
 */
exports.processPayment = async (req, res) => {
  try {
    const { orderId, amount } = req.body;

    // Simulate successful payment
    const paymentStatus = "paid";

    // Notify Order Service
    await axios.post(
      `${process.env.ORDER_SERVICE_URL}/api/orders/pay`,
      {
        orderId,
        status: paymentStatus
      },
      {
        headers: {
          Authorization: req.headers.authorization
        }
      }
    );
await axios.post("http://localhost:7000/api/notifications", {
  type: "PAYMENT_SUCCESS",
  userId: req.user.id,
  message: `Payment successful for order ${orderId}`
});
    res.json({
      message: "Payment successful",
      orderId,
      amount,
      status: paymentStatus
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

