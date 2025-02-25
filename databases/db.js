const Sequelize = require('sequelize');

const data = new Sequelize('apitester', 'root', 'root', {
    host: 'localhost',
    dialect:'mysql'
});

try{
    data.authenticate();
    console.log('Connection has been established successfully.');
}catch{
    console.error('Unable to connect to the database:');
}

module.exports = data;