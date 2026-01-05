const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/productController");

router.get("/", auth, controller.getProducts);
router.post("/", auth, controller.addProduct);

module.exports = router;
