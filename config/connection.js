//Requires the mysql module to set up the connection to the database
var mysql = require("mysql");

//Defines connection to database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123",
  database: "burgers_db"
});

//Connects using the mysql connect method
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//exports the connection variable for use in other files
module.exports = connection;