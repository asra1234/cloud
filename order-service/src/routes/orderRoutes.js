const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/orderController");

router.post("/", auth, controller.createOrder);
router.get("/", auth, controller.getOrders);
router.post("/pay", auth, controller.updateOrderStatus);


module.exports = router;
