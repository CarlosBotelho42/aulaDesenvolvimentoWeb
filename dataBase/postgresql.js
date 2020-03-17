const { Pool, Client } = require('pg');

const pool = new Pool({
    
    user: 'postgres',
    host: 'localhost',
    database: 'UnaWebProject',
    password: 'postgres',


}) 

/*pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT * FROM users', (err, result) => {
      release()
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      console.log(result.rows)
    })
  })*/

  module.exports = {pool}

