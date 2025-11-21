const express = require("express")
const router = express.Router()
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controllers.js')
const auth = require('../middlewares/auth.middleware.js')

router.get('/get', getProducts)
router.get('/get/:id', auth, getProduct)
router.post('/create', auth, createProduct)
router.put('/update/:id', auth, updateProduct)
router.delete('/delete/:id', auth, deleteProduct)

module.exports = router