// requirements
const path = require("path");
const fs = require("fs");
const { v4 } = require("uuid");
const Product = require("../models/Product");

const productsDataPath = path.join(__dirname, "..", "data", "products.json");

exports.getProducts = (request, response) => {
  Product.fetchAll((products) => {
    response.render("index", {
      pageTitle: "Web Shop",
      path: "/products",
      products: products,
    });
  });
};

exports.getProduct = (request, response) => {
  const { id } = request.params;

  Product.findById(id, (product) => {
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
};
