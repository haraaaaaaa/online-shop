// Requirements
const express = require("express");
const path = require("path");
const productsRoutes = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");
const cartRoutes = require("./routes/cart.routes");
const errorControllers = require("./controllers/error-controllers");

const { connect } = require("./util/database");

// Server Setup
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routing
app.use(productsRoutes);
app.use(adminRoutes);
app.use(cartRoutes);

app.get("*", errorControllers.get404);

connect().then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});
