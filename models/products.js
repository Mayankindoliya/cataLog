const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: {type: String},
  description: String,
  brand: {type: Schema.Types.ObjectId, ref: 'brands'},
  category: {type: Schema.Types.ObjectId, ref: 'categories'},
  price: Number,
});

module.exports = mongoose.model('products', productsSchema)