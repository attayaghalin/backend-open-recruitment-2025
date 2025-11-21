const Product = require('../models/product.model.js')

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json({
      success: true,
      data: products
    })
  } catch (error) {
    throw new Error(error.message)
  }
}

const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    if (!product) {
      res.status(404)
      throw new Error("Product not found")
    }
    res.status(200).json({
      success: true,
      data: product
    })
  } catch (error) {
    throw new Error(error.message)
  }
}

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json({
      success: true,
      message: "Product created",
      data: product
    })
  } catch (error) {
    throw new Error(error.message)
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body)
    if (!product) {
      res.status(404)
      throw new Error("Product not found")
    }
    const updatedProduct = await Product.findById(id)
    res.status(200).json({
      success: true,
      message: "Product updated",
      data: updatedProduct
    })

  } catch (error) {
    throw new Error(error.message)
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findByIdAndDelete(id)
    if (!product) {
      res.status(404)
      throw new Error("Product not found")
    }
    res.status(200).json({
      success: true,
      message: "Product deleted"
    })
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}