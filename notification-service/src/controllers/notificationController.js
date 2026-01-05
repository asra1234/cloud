exports.sendNotification = async (req, res) => {
  const { type, message, userId } = req.body;

  // Simulate notification
  console.log("🔔 NOTIFICATION EVENT");
  console.log("Type:", type);
  console.log("User ID:", userId);
  console.log("Message:", message);

  res.json({
    status: "Notification sent (simulated)",
    type,
    userId
  });
};
