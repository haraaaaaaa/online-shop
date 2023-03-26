// requirements
const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4 } = require("uuid");

const router = express.Router();

const productsDataPath = path.join(__dirname, "..", "data", "products.json");

router.get("/", (request, response) => response.redirect("/products"));

router.get("/products", (request, response) => {
  fs.readFile(productsDataPath, (err, products) => {
    response.render("index", {
      pageTitle: "Web Shop",
      path: "/products",
      products: JSON.parse(products),
    });
  });
});

router.get("/products/:id", (request, response) => {
  const { id } = request.params;

  fs.readFile(productsDataPath, (err, products) => {
    const product = JSON.parse(products).find((product) => product.id === id);
    const error = { message: "Not Found" };

    if (!product)
      return response.render("error", {
        pageTitle: error.title,
        path: "*",
        error,
      });

    response.render("product-detail", {
      pageTitle: product.title,
      path: "/products",
      product,
    });
  });
});

module.exports = router;
