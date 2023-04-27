// Requirements
const Product = require("../models/Product");

exports.getProducts = async (request, response) => {
  const products = await Product.fetchAll();
  response.render("index", {
    pageTitle: "Web Shop",
    path: "/products",
    products,
  });
};

exports.getProduct = async (request, response) => {
  const { id } = request.params;

  const product = await Product.findById(id);

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
};
