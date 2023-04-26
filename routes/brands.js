const express = require('express');

const router = express.Router();
const BrandsController = require('../controllers/brands')


router.get('/brands', (req, res, next) => {
  BrandsController.getBrands()
    .then((data) => {
      res.json(data)
    })
    .catch(err => next(err))
})

router.post('/brands', (req, res, next) => {
  BrandsController.createBrand(req.body)
    .then((data) => res.json(data))
    .catch(err => next(err))
})

router.put("/brands/:id", (req, res, next) => {
  BrandsController.updateBrand(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch(err => next(err))
})

router.delete('/brands/:id', (req, res, next) => {
  BrandsController.deleteBrand(req.params.id)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});

module.exports = router;