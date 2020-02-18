const categoriesModel = require('../models/categoriesModel')

exports.readAll = (req,res) =>{
    categoriesModel.readAll()
    .then(categories =>{
        res.json(categories)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.readAllAnswer = (req,res) =>{
    categoriesModel.readAllAnswer()
    .then(categories =>{
        res.json(categories)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })    
}

exports.readAllRemark = (req,res) =>{
    categoriesModel.readAllRemark()
    .then(categories =>{
        res.json(categories)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })    
}

exports.read = (req,res) =>{
    const idCategory = parseInt(req.params.idCategory)

    categoriesModel.read(idCategory)
    .then(category =>{
        res.json(category)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })    
}