const categoriesModel = require('../models/categoriesModel')

exports.readAll = (req,res) =>{
    categoriesModel.readAll()
    .then(categories =>{
        res.status(200).json({"message":"Success","data" : categories})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve categories from the database"})
    })
}

exports.readAllAnswer = (req,res) =>{
    categoriesModel.readAllAnswer()
    .then(categories =>{
        res.status(200).json({"message":"Success","data" : categories})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve categories from the database"})
    })    
}

exports.readAllRemark = (req,res) =>{
    categoriesModel.readAllRemark()
    .then(categories =>{
        res.status(200).json({"message":"Success","data" : categories})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve categories from the database"})
    })    
}

exports.read = (req,res) =>{
    const idCategory = parseInt(req.params.idCategory)

    categoriesModel.read(idCategory)
    .then(category =>{
        res.status(200).json({"message":"Success","data" : category})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve the category from the database"})
    })    
}