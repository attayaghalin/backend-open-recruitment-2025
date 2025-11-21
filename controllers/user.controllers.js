const User = require('../models/user.model.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const exist = await User.findOne({ email })
    if (exist) {
      res.status(400)
      throw new Error("Email already used")
    }
    const hashed = await bcrypt.hash(password, 10)
    const user = await User.create(
      {
        name,
        email,
        password: hashed
      }

    )
    res.status(201).json({
      success: true,
      message: "User registered",
      data: user
    })
  } catch (error) {
    throw new Error(error.message)
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      res.status(404)
      throw new Error("User not found")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      res.status(400)
      throw new Error("Incorrect password")
    }
    const token = jwt.sign(
      { id: user._id },
      "SECRETKEY123",
      { expiresIn: "1d" }
    )

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      token
    })

  } catch (error) {
    next(error)
  }
}

module.exports = {
  register,
  login
}