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

exports.create = (req,res) =>{
    const lib = req.body.lib
    const type = req.body.type

    categoriesModel.create(lib,type)
    .then(queryRes =>{
        let idCategory = queryRes.rows[0]
        res.status(200).json({"message":"Success","data" : idCategory})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to create the category in the database"})
    })
}

exports.update = (req,res) =>{
    const idCategory = parseInt(req.params.idCategory)
    const lib = req.body.lib
    const type = req.body.type

    categoriesModel.update(idCategory,lib,type)
    .then(() =>{
        res.status(200).json({"message":"Success"})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to update the category "})
    })
}


exports.delete = (req,res) =>{
    const idCategory = parseInt(req.params.idCategory)

    categoriesModel.delete(idCategory)
    .then(() =>{
        res.status(200).json({"message":"Success"})
    })
    .catch(err =>{
        res.status(400).json({"message" : "Error, not able to delete the category in the database"})
    })
}
