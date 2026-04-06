const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'VB25@bipinm',
        database: 'internship-tracking-system-db',
    },
});

module.exports = knex;