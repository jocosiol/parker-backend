const mysql = require("mysql2");
const path = require("path");
const Postgrator = require("postgrator");

const postgrator = new Postgrator({
    migrationPattern: path.resolve(__dirname, "../migrations/*"),
    driver: "mysql",
    host: "127.0.0.1",
    port: 3306,
    database: "parker_db",
    username: "root",
    password: "password",
    schemaTable: "migrations",
  });
  
  const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "parker_db",
    waitForConnections: true,
  });
  
  function query(sql) {
    return new Promise((resolve, reject) => {
      pool.query(sql, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
  
  exports.postgrator = postgrator;
  exports.pool = pool;
  exports.query = query;
