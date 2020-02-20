const express = require('express');
const router = express.Router();

//Init bp
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const remarksController = require('../controllers/remarksController');

//Get all remarks
router.get('/', remarksController.readAll)

//Add a remark
router.post('/', jsonParser, remarksController.create)

//Get a remark by his id
router.get('/:idRemark', remarksController.read)

//delete a remark by his id
router.delete('/:idRemark', remarksController.delete)

//update a remark by his id
router.put('/:idRemark', jsonParser, remarksController.update)

//Get remark's answers
router.get('/:idRemark/answers', remarksController.readAllAnswers)

//delete remark's answer
router.delete('/:idRemark/answers/:idAnswer', remarksController.unlinkAnswer)

//Link an existing answer
router.post('/:idRemark/answers/:idAnswer', jsonParser, remarksController.linkAnswer)

//Say we already encouter a remark 
router.post('/:idRemark/encounter', jsonParser, remarksController.encounter)

//Delete "encouter" a remark 
router.delete('/:idRemark/encounter', remarksController.deleteEncounter)

//Get encounter nb for a remark 
router.get('/:idRemark/encounter', remarksController.getNbEncounter)

module.exports = router;