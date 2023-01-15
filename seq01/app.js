const { Sequelize, DataTypes, QueryTypes, Op} = require("sequelize");

const { sequelize, Product, Category, Supplier, nice} = require('./models')

// Product.findAll({
//   attributes: [
//     'ProductID', 'ProductName',
//     [sequelize.fn('COUNT', sequelize.col('ProductID')), 'n_ProductID'],
//     'CategoryID'
//   ],
//   include : Category
// }).then(nice);

// for( k in Product) 
//   console.log( k )

// Product.findAll({
//   attributes: ['ProductID', 'Productname', 'CategoryID'],
//   where : {ProductID : 4},
//   include: Category
// }).then(nice)

// Category.findAll({
//   where : { CategoryID : 5},
//   include : Product
// }).then(nice)

// console.log(Product.rawAttributes)

// Supplier.findAll({
//   attributes: ['SupplierID', 'SupplierName'],
//   include : {
//     model : Product,
//     attributes: ['ProductName'],
//     where : { CategoryID: 1},
//     include: {
//       model: Category,
//       attributes: ['CategoryName']
//     }
//   }
// }).then(nice)


// Supplier.findAll({
//   attributes: ['SupplierID', 'SupplierName'],
//   include : {
//     model : Product,
//     attributes: ['ProductName'],
//     where : { CategoryID: 1},
//     include: {
//       model: Category,
//       attributes: ['CategoryName']
//     }
//   }
// }).then(rs => {

//   // nice(rs[1].products[0].category.CategoryName)
  
//   let output = rs.map( el => ({ SupName: el.SupplierName, ProName: el.products[0].ProductName }))
//   output = { 
//     category_name : rs[0].products[0].category.CategoryName,
//     Sup_Prod : output 
//   }
//   console.log(output)
// })


// Product.findAll({
//   attributes: [
//     'SupplierID',
//   ],
//   where: {CategoryID : 3},
//   include : [
//     { model : Category, attributes: ['CategoryName']},
//     { model : Supplier, attributes: ['SupplierName']}
//   ],
//   order: ['SupplierID']
// }).then(rs => {
//   nice(rs)
// })

// Product.findAll({
//   attributes: [
//     'SupplierID',
//     [sequelize.fn('COUNT', sequelize.col('ProductID')), 'NumberOfProduct'],
//   ],
//   where: {CategoryID : 3},
//   group: 'SupplierID',
//   include : [
//     { model : Category, attributes: ['CategoryName']},
//     { model : Supplier, attributes: ['SupplierName']}
//   ],
// }).then(rs => {
//   nice(rs)
// })

Product.findAll({
  attributes: [
    'SupplierID',
    [sequelize.fn('COUNT', sequelize.col('ProductID')), 'NumberOfProduct'],
  ],
  where: {CategoryID : 3},
  group: 'SupplierID',
  include : [
    { model : Category, attributes: ['CategoryName']},
    { model : Supplier, attributes: ['SupplierName']}
  ],  
  raw: true,
  nest: true
}).then(rs => {
  nice(rs[0])
  // console.log(rs[0].num)
  // let x = JSON.parse(JSON.stringify(rs[0]))
  // console.log(x.num)
  
  let out = rs.map(el => ({
    supplier: el.supplier.SupplierName,
    NumberOfProduct: el.NumberOfProduct  
  }))
  out = {category: rs[0].category.CategoryName, suppliers : out}
  console.log(out)
})
