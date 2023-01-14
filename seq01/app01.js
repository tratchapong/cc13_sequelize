const { Sequelize, DataTypes, QueryTypes} = require("sequelize");

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: 'Codecamp2021',
  // database: 'cc13_seqlab',
  database: 'cc13_shop',
  dialect: 'mysql'
})

// sequelize.authenticate()
// .then( ()=> console.log('OK'))
// .catch(err => {
//   console.log(err.message)
// })


//--------------------------------

// async function run() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// run()

//------RAW Query : Change DB to existing one: cc13_shop -------------


// let sql = 'Select * from products'
// sequelize.query(sql).then( rs => {
//   console.log(rs[0])
// })


// let sql = `
// Select p.name as name, p.price as price, c.name as Category
// from products as p
// join category as c
// on p.cat_id=c.id
// `
// sequelize.query(sql).then( rs => {
//   console.log(rs[0])
// })


