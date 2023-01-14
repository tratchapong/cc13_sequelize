const { Sequelize, DataTypes, QueryTypes} = require("sequelize");

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: 'Codecamp2021',
  database: 'cc13_seqlab',
  dialect: 'mysql'
})

// const User = sequelize.define('USER', {
//   username: DataTypes.STRING,
//   birth: DataTypes.DATEONLY
// })

// User.sync({force:true})
// User.sync({alter:true})

// console.log(User.tableName)

// User.create({username: 'Andy', birth: '2000-02-03'}).then( console.log)

// User.findAll().then( rs=> {
//   console.log(JSON.stringify(rs, null, 2))
// })

// User.findAll({
//   where : {id : 2}
// }).then(rs=>console.log(rs[0].username))

