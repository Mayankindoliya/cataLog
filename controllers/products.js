const Products = require('../models/products');

class productController {

  static async getproducts(query) {
    let filter = {}
    if (query.filter) {
       filter = JSON.parse(query.filter)
    }
    const products = await Products.find(filter, query.projection)
    console.log(query)
    return products
  };

  static async createproducts(document) {
    const products = await Products.create(document)
    return products
  };

  static async updateproducts(id, document) {
    const product = await Products.findOneAndUpdate({ _id: id }, document, { new: true })
    return product
  };

  static async deleteproducts(id) {
    const products = await Products.findOneAndDelete({ _id: id })
    return products
  }

};



module.exports = productController;