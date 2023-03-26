// requirements
const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4 } = require("uuid");

const router = express.Router();

const productsDataPath = path.join(__dirname, "..", "data", "products.json");

router.get("/admin/add-product", (request, response) => {
  response.render("add-product", {
    pageTitle: "Add new product",
    path: "/admin/add-product",
  });
});

router.post("/admin/add-product", (request, response) => {
  const { title, price } = request.body;

  const product = {
    id: v4(),
    title,
    price,
  };

  fs.readFile(productsDataPath, (err, products) => {
    const updatedProducts = [product, ...JSON.parse(products)];
    fs.writeFile(productsDataPath, JSON.stringify(updatedProducts), () => {
      response.redirect("/");
    });
  });
});

router.get("/admin/products", (request, response) => {
  fs.readFile(productsDataPath, (err, products) => {
    response.render("admin-products", {
      pageTitle: "Admin Products",
      path: "/admin/products",
      products: JSON.parse(products),
    });
  });
});

router.get("/admin/orders", (request, response) => {
  response.render("admin-orders", {
    pageTitle: "Admin Orders",
    path: "/admin/orders",
    products: JSON.parse(products),
  });
});

module.exports = router;
