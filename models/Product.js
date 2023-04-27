// Requirements
const { getDB } = require("../util/database");
const { ObjectId } = require("bson");

module.exports = class Product {
  constructor(title, price, categoryId) {
    this.title = title;
    this.price = price;
    this.categoryId = new ObjectId(categoryId);
  }

  async save() {
    return await getDB().collection("products").insertOne(this);
  }

  static async fetchAll() {
    return await getDB().collection("products").find().toArray();
  }

  static async findById(id) {
    return await getDB()
      .collection("products")
      .findOne({ _id: new ObjectId(id) });
  }
};
