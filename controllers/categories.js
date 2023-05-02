const Categories = require('../models/categories');

class CategoriesController {
  static async getCategories(query) {
    let filter = {}
    if(query.filter){
       filter = JSON.parse(query.filter)
    }
    //  console.log(query)
    const categories = await Categories.find(filter, query.projection)
    return categories
  };

  static async createCategories(document) {
    const categories = await Categories.create(document)
    return categories
  };

  static async updateCategories(id, document) {
   const categories = await Categories.findOneAndUpdate({_id: id}, document)
   return categories
  }

  static async deleteCategories(id, document) {
  const categories = await Categories.findOneAndDelete({_id:id}, document)
  return categories
  }

}


module.exports = 
  CategoriesController
