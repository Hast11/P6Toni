// Importar SEQUELIZE: Load ORM
const Sequelize = require('sequelize');

// To use SQLite data base:
// DATABASE_URL = sqlite:db-p5-orm.sqlite
const url = "sqlite:blog.sqlite";

// CREACIÓN DB:
const sequelize = new Sequelize(url, { logging: false });

// // IMPORTAR DEFINICIONES DE MODELOS:
// const Author = require('./author')(sequelize, Sequelize.DataTypes);
// const Post = require('./post')(sequelize, Sequelize.DataTypes);

module.exports = sequelize;