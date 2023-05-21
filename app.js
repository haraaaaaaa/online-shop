// Requirements
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Server Setup
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routing
require("./models/Product");
require("./models/Category");

const productsRoutes = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");
const cartRoutes = require("./routes/cart.routes");
const errorControllers = require("./controllers/error-controllers");

app.use(productsRoutes);
app.use(adminRoutes);
app.use(cartRoutes);

app.get("*", errorControllers.get404);

mongoose.connect("mongodb://127.0.0.1:27017/onlineshop").then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});
