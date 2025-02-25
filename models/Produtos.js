const Sequelize = require('sequelize');
const data = require('../databases/db');

const Product = data.define('apiprod',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    price: Sequelize.DECIMAL(10,2),
    quantity: Sequelize.INTEGER
});


module.exports = Product;