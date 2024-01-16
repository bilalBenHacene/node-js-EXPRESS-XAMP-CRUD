const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./connection");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/public',express.static('public'));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});

// app.get("/", (req, res) => {
//   res.render("page.ejs");
// });

app.post("/", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;

  var query = `INSERT INTO user(Name, Email) VALUES (?)`;
  var vlaues = [name, email];

  connection.query(query, [vlaues], (err, result) => {
    if (err) console.log(err);
    else console.log("Data is inserted");

    res.redirect("/");
  });
});

app.get("/", (req, res) => {
  var query = `select * from user`;
  connection.query(query, (err, result) => {
    if (err) console.log(err);
    res.render("page",{ test: result } );
  });
});

app.post("/update/:id", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var id=req.params.id;

  var query = "UPDATE `user` SET `Name`=?,`Email`=? WHERE ID=?";
  var vlaues = [name, email,id];
  connection.query(query,vlaues, (err, result) => {
    if (err) console.log(err);
    res.redirect('/');
  });
});
app.get("/delete/:id", (req, res) => {
  var id=req.params.id;

  var query = "DELETE FROM `user` WHERE ID=?";
  // var vlaues = [id];
  connection.query(query,id, (err, result) => {
    if (err) console.log(err);
    res.redirect('/');
  });
});

