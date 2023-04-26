const mongoose = require('mongoose')
const Schema = mongoose.Schema

const brandsSchema = new Schema({
  name: String,
  description: String
})

module.exports = mongoose.model('brands', brandsSchema) 