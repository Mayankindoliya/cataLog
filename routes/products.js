const express = require('express');

const router = express.Router();

const productController  = require('../controllers/products');

router.get('/products', (req, res, next) => {
  productController .getproducts(req.query)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
});   

router.post('/products', (req, res, next) => {
  productController.createproducts(req.body)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next (err)
  })
});

router.put('/products/:id', (req, res, next) => {
  productController.updateproducts(req.params.id, req.body)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next (err)
  })
});

router.delete('/products/:id', (req, res, next) => {
  productController.deleteproducts(req.params.id)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
});


module.exports = router;