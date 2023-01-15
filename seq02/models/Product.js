// const {Sequelize, DataTypes} = require('sequelize')
// let sequelize = new Sequelize()

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product',{
    productName : DataTypes.STRING,
    price : {
      type: DataTypes.DECIMAL(10,2),
      validate : {
        isDecimal : true,
        max: {
          args : [5000],
          msg: "price must be less than 5000"
        }
        
      }
    },
 },{
    timestamps : false,
    // underscored : true,
    // paranoid : true
 })

 Product.associate = db => {
  Product.belongsTo(db.Category)
 }

  return Product
}

