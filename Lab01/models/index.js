const { Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: 'Codecamp2021',
  database: 'cc13_shop',
  dialect: 'mysql'
})

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL(10,2),
  cat_id: DataTypes.INTEGER
}, {
  timestamps: false
})

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true 
  },
  name: DataTypes.STRING
},{
  timestamps: false,
  freezeTableName: true
})

Category.hasMany(Product,{
  foreignKey : 'cat_id'
})
Product.belongsTo(Category,{
  foreignKey: 'cat_id'
})

module.exports = {sequelize, Product, Category}
