// Requirements
const Product = require("../models/Product");
const Category = require("../models/Category");

exports.getAddProduct = async (request, response) => {
  const categories = await Category.fetchAll();
  response.render("add-product", {
    pageTitle: "Add New Product",
    path: "/admin/add-product",
    categories,
  });
};

exports.postAddProduct = async (request, response) => {
  const { title, price, category } = request.body;
  const product = new Product(title, price, category);
  await product.save();
  response.redirect("/");
};

exports.getAdminProducts = async (request, response) => {
  const products = await Product.fetchAll();
  response.render("admin-products", {
    pageTitle: "Admin Products",
    path: "/admin/products",
    products,
  });
};

exports.getAdminOrders = (request, response) => {
  response.render("admin-orders", {
    pageTitle: "Admin Orders",
    path: "/admin/orders",
  });
};
