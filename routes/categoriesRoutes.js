const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoriesController');

//Get all Categorys
router.get('/', categoryController.readAll)

//Get all answer's category
router.get('/answers', categoryController.readAllAnswer)

//Get all remark's category
router.get('/remarks', categoryController.readAllRemark)

//Get category by his id
router.get('/:idCategory', categoryController.read)

module.exports = router;