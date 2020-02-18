const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');

//Get all Categorys
router.get('/', categoryController.readAll)

//Get all answer's category
router.get('/', categoryController.readAllAnswer)

//Get all remark's category
router.get('/', categoryController.readAllRemark)

//Get category by his id
router.get('/', categoryController.read)