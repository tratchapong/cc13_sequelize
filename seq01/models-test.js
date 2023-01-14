const { Sequelize, DataTypes, QueryTypes, Op} = require("sequelize");
const {Product, Category, nice} = require('./models')

Product.findAll({
  attributes: ['ProductID','ProductName','price'],
  include: {model: Category , attributes: ['categoryid','CategoryName']},
  where: { price : {[Op.lt] : 5}} 
}).then( nice )

// Category.findAll({
//   include: {model: Product, where: { price: {[Op.gt] : 100 }}},
// }).then( nice)

