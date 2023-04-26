const Brands = require('../models/brands');

class BrandsController {
  static async getBrands() {
    const brands = await Brands.find({})
    return brands;
  }

  static async createBrand(document) {
    const brand = await Brands.create(document)
    return brand
  }

  static async updateBrand(id, document) {
    const brand = await Brands.findOneAndUpdate({_id: id}, document)
    return brand
  }

  static async deleteBrand(id, document) {
   const brand = await Brands.findOneAndDelete({_id: id, document})
  return brand
  }
}

module.exports = BrandsController;