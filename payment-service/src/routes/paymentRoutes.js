const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/paymentController");

router.post("/pay", auth, controller.payOrder);

module.exports = router;
