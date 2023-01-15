const {sequelize, Product, Category} = require('./models/')
const { Op } = require('sequelize')

// console.log(db.Product)

// db.sequelize.query('Select 1+1').then(([rs])=>console.log(rs))

// sequelize.sync({force: true})


// Category.create({
//   categoryName : 'Software'
// }).then(rs => {
//   console.log(rs.dataValues)
// })

// Category.destroy({
//   where : { id : 2}
// }).then(console.log)

// ------ Reset Table : Category --------
// Category.drop()
// .then( ()=>Category.sync({force: true}))
// .then( ()=>Category.bulkCreate([
//   {categoryName: 'Software'},
//   {categoryName: 'Book'},
//   {categoryName: 'IT'},
// ]).then(console.log)
// )

// Category.bulkCreate([
//     {categoryName: 'Software'},
//     {categoryName: 'Book'},
//     {categoryName: 'IT'},
//   ]).then(console.log)

// Product.sync({ alter: true })

// Product.bulkCreate([
//   {productName: 'Excel', price: 2500, CategoryId: 1},
//   {productName: 'Excel Guide', price: 900, CategoryId: 2},
//   {productName: 'Word', price: 3000, CategoryId: 1},
//   {productName: 'Word Guide', price: 750, CategoryId: 2},
//   {productName: 'Access', price: 4000, CategoryId: 1},
//   {productName: 'Zoom', price: 3500, CategoryId: 1},
//   {productName: 'React.js for expert', price: 2500, CategoryId: 2},
// ]).then(console.log)

// Product.drop().then(console.log)

const nice = jss => console.log(JSON.stringify(jss,null,2))

// Product.findAll({
//   where : {CategoryId : 1 },
//   include: {
//     model: Category,
//     // where: {id : 2}
//   } 
// }).then(nice)

// Category.findAll({
//   where :{},
//   include: Product
// }).then(nice)


// Category.update({
//   categoryName : 'Gadget', 
// },{
//   where : { id : 3}
// }).then(nice)

// Product.findAll({
//   where : { price : { [Op.gt] : 1000} }
// }).then(nice)


// Product.findAll({
//   where : { productName : { [Op.like] : '%guide%'} }
// }).then(nice)

// Product.findAll({
//   where : { price : { [Op.gt] : 1000} },
//   order : [ ['productName', 'DESC'] ]
// }).then(nice)

// Product.min('price').then(nice)

// Product.sum('price').then(console.log)

// Product.count({
//   where : { CategoryId : 2}
// }).then(nice)

// Product.create({productName: 'Excel2023', price: 7500, CategoryId: 1})
// .then(nice)
// .catch( err => console.log(err.message))

