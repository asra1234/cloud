require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(4000, () => {
  console.log("Product Service running on port 4000");
});
