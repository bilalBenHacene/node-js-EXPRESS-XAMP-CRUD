// Load the mysql package
var mysql = require("mysql");

// Create the connection using the server,username and password.
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

connection.connect(function(err) {
  if (err) console.log("XAMPP Server is not running....!");
  else {
    console.log("Connected to XAMPP Server....!");

    //sql query to create a database named  TestDB in XAMPP
    connection.query("CREATE DATABASE IF NOT EXISTS TestDB", function(
      err,
      result
    ) {
      //Display message in our console.
      if (err) console.log("Database TestDB not created");
      else console.log("Database TestDB is created");
    });

    connection.query("USE TestDB", function(err, result) {
      if (err) console.log("Database TestDB not used");
      else console.log("Database TestDB is used");
    });

    let query = `CREATE TABLE IF NOT EXISTS user (
        ID int  NOT NULL AUTO_INCREMENT,
        Name varchar(255),
        Email varchar(255),
        PRIMARY KEY (ID)
    )`;
    connection.query(query, function(err, result) {
      if (err) console.log("table user not created");
      else console.log("table user is created");
    });
  }
});

module.exports = connection;
