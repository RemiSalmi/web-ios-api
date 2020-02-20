const express = require('express');
const router = express.Router();

//Init bp
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const answersController = require('../controllers/answersController');

//Get all answers
router.get('/', answersController.readAll)

//Create an answer
router.post('/', jsonParser, answersController.create)

//Get an answer by his id 
router.get('/:idAnswer', answersController.read)

//delete an answer by his id 
router.delete('/:idAnswer', answersController.delete)

//Update an answer by his id 
router.put('/:idAnswer', jsonParser, answersController.update)

//Get answer's like number  
router.get('/:idAnswer/likes', answersController.getNbLikes)

//Add a like to an answer 
router.post('/:idAnswer/likes', jsonParser, answersController.addLike)

//delete a like to an answer 
router.delete('/:idAnswer/likes', answersController.deleteLike)

//Add a comment to an answer 
router.post('/:idAnswer/comments', jsonParser, answersController.addComment)

//Get answer's comments  
router.get('/:idAnswer/comments', answersController.getAllCommentsByAnswer)

//delete a comment to an answer 
router.delete('/:idAnswer/comments/:idComment', answersController.deleteComment)

module.exports = router;