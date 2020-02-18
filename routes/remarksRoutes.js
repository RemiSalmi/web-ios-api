const express = require('express');
const router = express.Router();

//Init bp
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false})

const remarksController = require('../controllers/remarksController');

//Get all remarks
router.get('/', remarksController.readAll)

//Add a remark
router.post('/', urlencodedParser, remarksController.create)

//Get a remark by his id
router.get('/:idRemark', remarksController.read)

//delete a remark by his id
router.delete('/:idRemark', remarksController.delete)

//update a remark by his id
router.put('/:idRemark', urlencodedParser, remarksController.update)

//Get remark's answers
router.get('/:idRemark/answers', remarksController.readAllAnswers)

//delete remark's answer
router.delete('/:idRemark/answers/:idAnswer', remarksController.unlinkAnswer)

//Link an existing answer
router.post('/:idRemark/answers/:idAnswer', urlencodedParser, remarksController.linkAnswer)

//Say we already encouter a remark 
router.post('/:idRemark/encouter', urlencodedParser, remarksController.encounter)

//Delete "encouter" a remark 
router.delete('/:idRemark/encouter', remarksController.deleteEncounter)

//Get encounter nb for a remark 
router.get('/:idRemark/encounter', remarksController.getNbEncounter)

module.exports = router;