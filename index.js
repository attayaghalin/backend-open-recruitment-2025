const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const routesUser = require('./routes/user.routes.js')
const routesProduct = require('./routes/product.routes.js')

app.use('/api/user', routesUser)
app.use('/api/product', routesProduct)

const errorHandler = require('./middlewares/error.middleware.js');
app.use(errorHandler);

mongoose.connect('mongodb+srv://attayaghalin_db_user:Attaya25@belajar.aidm5gu.mongodb.net/Node-API?appName=Belajar')
  .then(() =>
    console.log('Connected!'))
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})

