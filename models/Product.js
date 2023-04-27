// Requirements
const path = require("path");
const fs = require("fs");
const { getDB } = require("../util/database");
const { ObjectId } = require("bson");

const productsDataPath = path.join(__dirname, "..", "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(productsDataPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, price, categoryId) {
    this.title = title;
    this.price = price;
    this.categoryId = new ObjectId(categoryId);
  }

  async save() {
    await getDB().collection("products").insertOne(this);
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((product) => product.id === id);
      cb(product);
    });
  }
};
