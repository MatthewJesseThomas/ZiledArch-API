const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const route = express.Router();
const {User, Product} = require('../model');

const user = new User();
// const product = new Product();

route.get('^?$|/ziledarch', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
});

// =========USER Router========
// User Login, Logging In... Route Setup
route.post('/user-login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
});
// Retrieving all Known Users... Route
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});
// Retrieving the specific User... Route
route.get('/users/:id', (req, res)=>{
    user.fetchUser(req, res);
});
// Updating User Information... Route
route.put('/users/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
// Registering Users... Route
route.post('/user-register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
});
// Deleting User... Route
route.delete('/users/:id', (req, res)=>{
    user.deleteUser(req, res);
});