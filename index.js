const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const routesProduct = require('./routes/product.routes.js')

app.use('/api/products', routesProduct)

mongoose.connect('mongodb+srv://attayaghalin_db_user:Attaya25@belajar.aidm5gu.mongodb.net/Node-API?appName=Belajar')
  .then(() => 
    console.log('Connected!')),
    app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

