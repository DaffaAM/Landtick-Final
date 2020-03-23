const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tiketinkuy"
});

connection.connect();
module.exports = connection;
