const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoriesController');

//Init bp
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

//load auth middleware
const auth = require('../middlewares/auth')

//Get all Categorys
router.get('/', categoryController.readAll)

//Get all answer's category
router.get('/answers', categoryController.readAllAnswer)

//Get all remark's category
router.get('/remarks', categoryController.readAllRemark)

//Get category by his id
router.get('/:idCategory', categoryController.read)

//Add a category
router.post('/', jsonParser,  auth.isConnected, categoryController.create)

//Update a category by his id
router.put('/:idCategory', jsonParser,  auth.isConnected, categoryController.update)

//Delete a category by his id
router.delete('/:idCategory', jsonParser, auth.isConnected, categoryController.delete)

module.exports = router;
