const express = require('express');
const router = express.Router();

const remarksController = require('../controllers/remarksController');

//Get all remarks
router.get('/', remarksController.readAll)

//Add a remark
router.post('/', remarksController.create)

//Get a remark by his id
router.get('/:idRemark', remarksController.read)

//delete a remark by his id
router.delete('/:idRemark', remarksController.delete)

//update a remark by his id
router.put('/:idRemark', remarksController.update)

//Get remark's answers
router.get('/:idRemark/answers', remarksController.readAllAnswers)

//delete remark's answer
router.delete('/:idRemark/answers/:idAnswer', remarksController.deleteAnswer)

//Link an existing answer
router.post('/:idRemark/answers/:idAnswer', remarksController.LinkAnswer)

//Say we already encouter a remark 
router.post('/:idRemark/encouter', remarksController.encouter)

//Delete "encouter" a remark 
router.delete('/:idRemark/encouter', remarksController.deleteEncouter)