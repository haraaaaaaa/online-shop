// Requirements
const express = require("express");
const router = express.Router();
const { getCart } = require("../controllers/cart-controllers");

router.get("/cart", getCart);

module.exports = router;
