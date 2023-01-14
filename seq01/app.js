const { Sequelize, DataTypes, QueryTypes, Op} = require("sequelize");

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: 'Codecamp2021',
  database: 'cc13_seqlab',
  dialect: 'mysql'
})

// sequelize.authenticate().then( ()=> console.log('OK')).catch(err => console.log(err))

// const User = sequelize.define('USER', {
//   username: DataTypes.STRING,
//   birth: DataTypes.DATEONLY
// })

// User.sync({force:true})

// console.log(User.tableName)

// User.create({username: 'Andy', birth: '2000-02-03'}).then( console.log)

// User.findAll().then( rs=> {
//   console.log(JSON.stringify(rs, null, 2))
// })

// User.findAll({
//   where : {id : 2}
// }).then(rs=>console.log(rs[0].username))


const Product = sequelize.define('product', {
  ProductID : {
    type : DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ProductName : DataTypes.STRING,
  SupplierID: DataTypes.INTEGER,
  Unit: DataTypes.STRING,
  Price: DataTypes.DECIMAL(10,2)
},{
  timestamps: false
})

// Product.findAll().then(rs => {
//   console.log(JSON.stringify(rs, null, 2))
// })

const Category = sequelize.define('category', {
  CategoryID : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  CategoryName : DataTypes.STRING,
  Description: DataTypes.STRING
},{
  timestamps: false,
  underscored: false
})

// Category.findByPk(4).then(rs => {
//   console.log(JSON.stringify(rs,null,2))
// })

// Category.findAll().then(rs => {
//   console.log(JSON.stringify(rs,null,2))
// })

// ------------------------------

// let sql = `
// Select CategoryName, ProductID, ProductName, Price
// from categories
// join products
// on products.CategoryID=categories.CategoryID
// where categories.CategoryID=7
// `

// sequelize.query(sql).then( rs => {
//   console.log(rs[0][1].Price)
// })

// ------------------------------
function nice(jss) {
  console.log(JSON.stringify(jss, null, 2))
}

Category.hasMany(Product, {
  foreignKey : 'CategoryID'
})
Product.belongsTo(Category,{
  foreignKey : 'CategoryID'
})

// Product.findAll({
//   attributes: ['ProductID','ProductName','price'],
//   include: {model: Category , attributes: ['categoryid','CategoryName']},
//   where: { CategoryID : 4} 
// }).then( nice )

Category.findAll({
  include: {model: Product, where: { price: {[Op.gt] : 100 }}},
}).then( nice)
