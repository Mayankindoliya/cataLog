const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: { type: String },
  description: String,
  class: String,
  fathersName: String,
  mothersName: String,
  address: String,
  category: { type: Schema.Types.ObjectId, ref: 'categories' },
  price: Number,
});

module.exports = mongoose.model('products', productsSchema)