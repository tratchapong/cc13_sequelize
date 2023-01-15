// const {Sequelize, DataTypes} = require('sequelize')
// let sequelize = new Sequelize()

module.exports = ( sequelize, DataTypes) => {
  const Category = sequelize.define('Category',{
    categoryName : DataTypes.STRING
  },{
    timestamps: false,
    // underscored: true
  })

  Category.associate = db => {
    Category.hasMany(db.Product)
  }
  return Category
}

