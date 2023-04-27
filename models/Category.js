const { getDB } = require("../util/database");

module.exports = class Category {
  static async fetchAll() {
    const categories = await getDB().collection("categories").find().toArray();
    return categories;
  }
};
