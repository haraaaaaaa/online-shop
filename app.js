// requirements
const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4 } = require("uuid");

// server setup
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const productsRoutes = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");

app.use(productsRoutes);
app.use(adminRoutes);

app.get("*", (request, response) => {
  const error = { message: "Not Found" };
  response.render("error", { pageTitle: error.title, path: "*", error });
});

app.listen(5000);

