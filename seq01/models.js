const { Sequelize, DataTypes, QueryTypes} = require("sequelize");

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: 'Codecamp2021',
  database: 'cc13_seqlab',
  dialect: 'mysql'
})

const Product = sequelize.define('product', {
  ProductID : {
    type : DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ProductName : DataTypes.STRING,
  // SupplierID: DataTypes.INTEGER,
  // CategoryID: DataTypes.INTEGER,
  Unit: DataTypes.STRING,
  Price: DataTypes.DECIMAL(10,2)
},{
  timestamps: false
})

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
  // underscored: false
})

const Supplier = sequelize.define('supplier', {
  SupplierID : {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  SupplierName : DataTypes.STRING,
  ContactName: DataTypes.STRING,
  Address : DataTypes.STRING,
  City : DataTypes.STRING,
  PostalCode: DataTypes.STRING,
  Country: DataTypes.STRING,
  Phone : DataTypes.STRING,
},{
  timestamps: false
})

Category.hasMany(Product, {
  foreignKey : 'CategoryID'
})
Product.belongsTo(Category,{
  foreignKey : 'CategoryID'
})

Supplier.hasMany(Product, {
  foreignKey: 'SupplierID'
})
Product.belongsTo(Supplier, {
  foreignKey: 'SupplierID'
})


function nice(jss) {
  console.log(JSON.stringify(jss, null, 2))
}

module.exports = {sequelize, Product, Category, Supplier, nice}