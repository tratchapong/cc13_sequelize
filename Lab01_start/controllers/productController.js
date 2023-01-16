const Product = require('../models/Product')

exports.getAllProducts = (req, res, next) => {

}

exports.getProduct = (req, res, next) => {
  const { id } = req.params

}

exports.getByName = (req, res, next) => {
  if(!req.query.keyword) 
   return  next()
  const {keyword} = req.query

}

exports.createProduct = (req, res, next) => {
  let product = req.body

}

exports.updateProduct = (req, res, next) => {
  let {id} = req.params
  let product = req.body

}

exports.deleteProduct = (req, res, next) => {
  let {id} = req.params

}
