const mysql = reuire("mysql");
require("dotenv").config();

const condb = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    multipleStatements: treu,
});
module.exports = condb;