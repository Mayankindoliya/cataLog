const Products = require('../models/products');

class productController {

  static async getproducts() {
  const products = await Products.find({})
  return products
  };

  static async createproducts(document) {
   const products = await Products.create(document)
   return products
  };

  static async updateproducts(id, document){
   const product = await Products.findOneAndUpdate({_id: id},document)
   return product
  };

  static async deleteproducts(id){
   const products = await Products.findOneAndDelete({_id:id})
   return products
  }

};



module.exports = productController;