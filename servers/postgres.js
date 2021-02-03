'use strict';

const Hapi = require('@hapi/hapi');
const {Sequelize} = require('sequelize');
const config = require('../config/config.json')


// Create a connection with the database
const sequelize = new Sequelize(config.postgres.database, config.postgres.username, config.postgres.password, {
    host: config.postgres.host,
    dialect: config.postgres.dialect
});

// Authenticate the connection to database
async function init() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established with the database successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

init();

module.exports = sequelize;
  