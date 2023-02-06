const Sequelize = require('sequelize');

const {
  HOST, DATABASE, DBUSER, PASSWORD,
} = process.env;
const sequelize = new Sequelize({
  password: PASSWORD,
  username: DBUSER,
  host: HOST,
  database: DATABASE,
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user')(sequelize, Sequelize);
db.expense = require('./expense')(sequelize, Sequelize);


module.exports = db;
