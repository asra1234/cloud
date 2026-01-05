require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/orders", require("./routes/orderRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Order Service running on port ${process.env.PORT}`);
});
