var express = require('express');
var jwt =require('express-jwt');

var auth = jwt({
    secret : 'MY_SECRET',
    userProperty : 'payload'
});

var router = express.Router()
var todos = require('./api/todos.route')


router.use('/todos', todos);


module.exports = router;