//-y it is meaning yes for all
npm init -y

//i or install express package
npm i express

//install nodemon package
npm i nodemon

//install mysql package
npm install mysql

//install body parser package
npm i body-parser

//install ejs package to make file view .ejs
npm i ejs

/*
**
Body parser middleware is an essential component in Express applications. It processes incoming request bodies, making it easier to handle POST and PUT requests. By parsing the body of an HTTP request and attaching it to the req. body property, it simplifies data extraction and manipulation in server-side logic
**
*/

//run the server use npx
npx nodemon app.js


//sql query
CREATE DATABASE IF NOT EXISTS TestDB;


CREATE TABLE IF NOT EXISTS user (
    ID int  NOT NULL AUTO_INCREMENT,
    Name varchar(255),
    Email varchar(255),
    PRIMARY KEY (ID)
);