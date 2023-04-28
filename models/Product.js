// Requirements
const { getDB } = require("../util/database");
const { ObjectId } = require("bson");

module.exports = class Product {
  constructor(title, price, categoryId, productId) {
    this.title = title;
    this.price = price;
    this.categoryId = new ObjectId(categoryId);

    if (productId) {
      this.productId = new ObjectId(productId);
    }
  }

  async save() {
    if (!this.productId) {
      return await getDB().collection("products").insertOne(this);
    } else {
      return await getDB()
        .collection("products")
        .updateOne(
          { _id: this.productId },
          {
            $set: {
              title: this.title,
              price: this.price,
              categoryId: this.categoryId,
            },
          }
        );
    }
  }

  static async fetchAll() {
    return await getDB().collection("products").find().toArray();
  }

  static async findById(id) {
    return await getDB()
      .collection("products")
      .findOne({ _id: new ObjectId(id) });
  }

  static async deleteById(id) {
    return await getDB()
      .collection("products")
      .deleteOne({ _id: new ObjectId(id) });
  }
};
