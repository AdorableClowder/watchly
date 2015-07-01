var knex;
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined) {
knex = require('knex')({
  client: 'mysql',
  connection: {
    user: 'root',
    host: '127.0.0.1',
    database: 'watchly',
    charset: 'utf8'
  }
});
} else if (process.env.NODE_ENV === 'production') {
  knex = require('knex')({
    client: 'mysql',
    connection: process.env.DATABASE_URL
  });
}
module.exports = knex; 
