const express = require('express');
const router = express.Router();

//Init bp
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const remarksController = require('../controllers/remarksController');

//load auth middleware
const auth = require('../middlewares/auth')

//Get all remarks
router.get('/', remarksController.readAll)

//Add a remark
router.post('/', jsonParser,auth.isConnected, remarksController.create)

//Get a remark by id
router.get('/:idRemark', remarksController.read)

//delete a remark by id
router.delete('/:idRemark',jsonParser, auth.isConnected, remarksController.delete)

//update a remark by id
router.put('/:idRemark', jsonParser,auth.isConnected, remarksController.update)

//Get remark's answers
router.get('/:idRemark/answers', remarksController.readAllAnswers)

//delete remark's answer
router.delete('/:idRemark/answers/:idAnswer',jsonParser, auth.isConnected, remarksController.unlinkAnswer)

//Link an existing answer
router.post('/:idRemark/answers/:idAnswer', jsonParser,auth.isConnected, remarksController.linkAnswer)

//Say we already encouter a remark 
router.post('/:idRemark/encounter', jsonParser, auth.isConnected, remarksController.encounter)

//Delete "encouter" a remark 
router.delete('/:idRemark/encounter',jsonParser, auth.isConnected, remarksController.deleteEncounter)

//Get encounter nb for a remark 
router.get('/:idRemark/encounter', remarksController.getNbEncounter)

//Get all users's remarks 
router.get('/users/:idUser', remarksController.getRemarksByUser)

module.exports = router;