const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  name: String,
  description: String,
  keyword: [String]
})

module.exports = mongoose.model('categories', categoriesSchema);