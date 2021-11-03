// doing this here to keep server.js clean

// initiating mysql
let mysql = require('mysql2');

// env. variable used for security
let env = process.env;

let database = mysql.createConnection(
    {
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB.PASSWORD,
        database: env.DB_NAME
    },

    console.log('Database Connected')
);

module.exports = database;

// schema sets up the framework of the database
// seeds populate the framework so you start with some entries