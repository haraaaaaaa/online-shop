// requirements
const path = require("path");
const fs = require("fs");
const Product = require("../models/Product");

const productsDataPath = path.join(__dirname, "..", "data", "products.json");

exports.getAddProduct = (request, response) => {
  response.render("add-product", {
    pageTitle: "Add new product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (request, response) => {
  const { title, price } = request.body;
  const product = new Product(title, price);
  product.save();
  response.redirect("/");
};

exports.getAdminProducts = (request, response) => {
  Product.fetchAll((products) => {
    response.render("admin-products", {
      pageTitle: "Admin Products",
      path: "/admin/products",
      products: products,
    });
  });
};

exports.getAdminOrders = (request, response) => {
  response.render("admin-orders", {
    pageTitle: "Admin Orders",
    path: "/admin/orders",
  });
};
