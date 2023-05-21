const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  price: Number,
  categoryId: mongoose.Types.ObjectId,
});

mongoose.model("products", productSchema);
