// Requirements
const { getDB } = require("../util/database");

module.exports = class Category {
  static async fetchAll() {
    return await getDB().collection("categories").find().toArray();
  }
};
