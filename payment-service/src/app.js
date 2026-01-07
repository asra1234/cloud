require("dotenv").config();
const express = require("express");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();
app.use(express.json());

app.use("/api/payments", paymentRoutes);

app.listen(process.env.PORT, () => {
  console.log("Payment Service running on port " + process.env.PORT);
});
