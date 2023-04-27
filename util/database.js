// Requirements
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
  database = client.db("onlineshop");
}

function getDB() {
  if (!database) {
    throw new Error("Database connection failed!");
  }
  return database;
}

module.exports = {
  connect,
  getDB,
};
