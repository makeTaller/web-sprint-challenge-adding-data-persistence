const knex = require('knex');

const config = {
  client: 'sqlite3',
  connection: {
    filename: './database',
  },
  useNullAsDefault: true,
};

module.exports = knex(config);