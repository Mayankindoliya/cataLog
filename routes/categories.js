const express = require('express');
const CategoriesController = require('../controllers/categories');
const router = express.Router();

router.get('/categories', (req, res, next) => {
  CategoriesController.getCategories(req.query)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
})

router.post('/categories', (req, res, next) => {
  CategoriesController.createCategories(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
})

router.put('/categories/:id', (req, res, next) => {
  CategoriesController.updateCategories(req.params.id, req.body)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
});

router.delete('/categories/:id', (req, res, next) => {
  CategoriesController.deleteCategories(req.params.id)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
});





module.exports = router;