const express = require('express');
const router = express.Router();

//Init bp
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const answersController = require('../controllers/answersController');

//load auth middleware
const auth = require('../middlewares/auth')

//Get all answers
router.get('/', answersController.readAll)

//Create an answer
router.post('/', jsonParser,auth.isConnected, answersController.create)

//Get an answer by id 
router.get('/:idAnswer', answersController.read)

//delete an answer by id 
router.delete('/:idAnswer',jsonParser,auth.isConnected, answersController.delete)

//Update an answer by id 
router.put('/:idAnswer', jsonParser,auth.isConnected, answersController.update)

//Get answer's like number  
router.get('/:idAnswer/likes', answersController.getNbLikes)

//Add a like to an answer 
router.post('/:idAnswer/likes', jsonParser,auth.isConnected, answersController.addLike)

//delete a like to an answer 
router.delete('/:idAnswer/likes',jsonParser,auth.isConnected, answersController.deleteLike)

//Add a comment to an answer 
router.post('/:idAnswer/comments', jsonParser,auth.isConnected, answersController.addComment)

//Get answer's comments  
router.get('/:idAnswer/comments', answersController.getAllCommentsByAnswer)

//delete a comment to an answer 
router.delete('/:idAnswer/comments/:idComment', jsonParser, auth.isConnected,answersController.deleteComment)

module.exports = router;