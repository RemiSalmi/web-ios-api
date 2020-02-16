const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

//Get all users
router.get('/', usersController.readAll)

//Add an user
router.post('/', usersController.create)

//Delete an user by his id
router.delete('/:idUser', usersController.delete)

//Get an user by his id 
router.get('/:idUser', usersController.read)

//Update an user by his id 
router.put('/:idUser', usersController.update)

//Login
router.post('/login', usersController.login)

//Logout
router.post('/:idUser', usersController.logout)