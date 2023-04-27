// Requirements
const express = require("express");
const router = express.Router();
const {
  getProduct,
  getProducts,
} = require("./../controllers/products-controllers");

router.get("/", (request, response) => response.redirect("/products"));

router.get("/products", getProducts);

router.get("/products/:id", getProduct);

module.exports = router;
