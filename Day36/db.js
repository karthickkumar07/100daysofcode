const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "test_db",
  password: "velammal",
  port: 5432,
});

module.exports = pool;
