const express = require('express');

const app = express();
const brandRoute = require('./routes/brands')
const categoriesRoute = require('./routes/categories')
const productRoute = require('./routes/products')
app.use(express.json())
app.use(brandRoute)
app.use(categoriesRoute);
app.use(productRoute);

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mayankindoliya:kiana@cluster0.mfofsan.mongodb.net/catalog?retryWrites=true&w=majority")
.then(() => {
  console.log("Database connected!!!")
  app.listen(3000, () => {
    console.log("Server is Ready(((())))!!!")
  })
}) 
.catch((err) => {
  console.log(err)
});


