const {Op} = require('sequelize')
const {sequelize, Product, Category} =require('../models')

const nice = jss => console.log(JSON.stringify(jss,null,2))

exports.getAllProducts = (req, res, next) => {
  Product.findAll({
    include : Category
  }).then(rs => {
  let out = rs.map( el=> ({ id:el.id, Pname:el.name, price: el.price, category: el.Category.name}))
    res.json(out)
  }).catch(next)
}

exports.getProduct = (req, res, next) => {
  const { id } = req.params
  Product.findAll({where : {id: id}}).then( rs=>{
    res.json(rs)
  } )
}

exports.getByName = (req, res, next) => {
  if(!req.query.keyword) 
   return  next()
  const {keyword} = req.query
  Product.findAll({where : { name : {[Op.like] : `%${keyword}%`}}}).then(rs=>{
    res.json(rs)
  })

}

exports.createProduct = (req, res, next) => {
  let product = req.body
  Product.create(product).then(rs => {
    res.json(rs)
  })
}

exports.updateProduct = (req, res, next) => {
  let {id} = req.params
  let product = req.body
  Product.update({...product},{ where: {id : id} }).then( rs => {
    res.json({msg: (rs>0)? 'Update OK': 'Cannot Update'})
  })
}

exports.deleteProduct = (req, res, next) => {
  let {id} = req.params
  Product.destroy({where: {id : id}}).then(rs => {
    console.log(rs)
    res.json({msg: (rs>0)? 'Delete OK': 'Cannot Delete'})
  })

}
