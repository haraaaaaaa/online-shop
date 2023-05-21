const mongoose = require("mongoose");
const Product = mongoose.model("products");
const Category = mongoose.model("categories");

exports.getAddProduct = async (request, response) => {
  const categories = await Category.find();
  response.render("add-product", {
    pageTitle: "Add New Product",
    path: "/admin/add-product",
    categories,
  });
};

exports.postAddProduct = async (request, response) => {
  const { title, price, category } = request.body;

  await Product.create({ title, price, category });

  response.redirect("/");
};

exports.getAdminProducts = async (request, response) => {
  const products = await Product.find();
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

exports.editProduct = async (request, response) => {
  const { id } = request.params;

  const product = await Product.findById(id);
  const categories = await Category.find();

  response.render("edit-product", {
    pageTitle: "Edit Product",
    path: "/admin/products",
    product,
    categories,
  });
};

exports.postEditProduct = async (request, response) => {
  const { id } = request.params;
  const { title, price, category } = request.body;

  const product = await Product.findById(id);

  product.title = title;
  product.price = price;
  product.categoryId = category;

  await product.save();

  response.redirect("/admin/products");
};

exports.getDeleteProduct = async (request, response) => {
  const { id } = request.params;

  await Product.deleteOne({ _id: id });
  response.redirect("/admin/products");
};
