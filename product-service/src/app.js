require("dotenv").config();
const express = require("express");
const routes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use("/api/products", routes);

app.listen(process.env.PORT, () =>
  console.log("Product Service running on port " + process.env.PORT)
);
