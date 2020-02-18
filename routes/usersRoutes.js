const express = require('express');
const router = express.Router();

//Init bp
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false})

const usersController = require('../controllers/usersController');

//Get all users
router.get('/', usersController.readAll)

//Add an user
router.post('/', urlencodedParser, usersController.create)

//Delete an user by his id
router.delete('/:idUser', usersController.delete)

//Get an user by his id 
router.get('/:idUser', usersController.read)

//Update an user by his id 
router.put('/:idUser',urlencodedParser, usersController.update)

//Login
router.post('/login',urlencodedParser, usersController.login)

//Logout
router.post('/:idUser',urlencodedParser, usersController.logout)

module.exports = router;