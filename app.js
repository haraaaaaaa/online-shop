// requirements
const express = require("express");
const path = require("path");
const fs = require("fs");

// server setup
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.listen(5000);

// variables
const productsDataPath = path.join(__dirname, "data", "products.json");

// routing
app.get("/", (request, response) => {
  fs.readFile(productsDataPath, (error, products) => {
    response.render("index", {
      pageTitle: "Web Shop",
      products: JSON.parse(products),
    });
  });
});

app.get("/admin/add-product", (request, response) => {
  response.render("add-product", { pageTitle: "Add new product" });
});

app.post("/admin/add-product", (request, response) => {
  const { title, price } = request.body;

  fs.readFile(productsDataPath, (error, products) => {
    const updatedProducts = [{ title, price }, ...JSON.parse(products)];
    fs.writeFile(productsDataPath, JSON.stringify(updatedProducts), () => {
      response.redirect("/");
    });
  });
});
