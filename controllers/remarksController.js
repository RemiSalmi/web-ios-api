const remarksModel = require('../models/remarksModel')
const answersModel = require('../models/answersModel')
const encountersModel = require('../models/encountersModel')
const listRAsModel = require('../models/listRAsModel')

//Init jwt
var jwt = require('jsonwebtoken');
const secret = require('../config/security')

exports.readAll = (req,res) =>{
    remarksModel.readAll()
    .then(remarks =>{
        res.status(200).json({"message":"Success","data" : remarks})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve remarks from the database"})
    })
}

exports.create = (req,res) =>{
    const remark = req.body.remark
    const idCategory = req.body.idCategory
    const idUser = jwt.decode(req.body.token).idUser

    remarksModel.create(remark, idCategory, idUser)
    .then(()=>{
        res.status(201).json({"message":"Success"})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to create a remark in the database"})
    })
}

exports.read = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)

    remarksModel.read(idRemark)
    .then(remark=>{
        res.status(200).json({"message":"Success","data" : remark})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve the remark from the database"})
    })
}

exports.delete = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)

    remarksModel.delete(idRemark)
    .then(() =>{
        res.status(200).json({"message":"Success"})
    })
    .catch(err =>{
        res.status(400).json({"message" : "Error, not able to delete the remark in the database"})
    })
}

exports.update = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)
    const remark = req.body.remark
    const idCategory = req.body.idCategory

    remarksModel.update(idRemark, remark, idCategory)
    .then(() =>{
        res.status(200).json({"message":"Success"})
    })
    .catch(err =>{
        console.log(err)
        res.status(400).json({"message" : "Error, not able to update the remark in the database"})
    })
}

exports.readAllAnswers = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)

    answersModel.readAllByRemarkID(idRemark)
    .then(answers=>{
        res.status(200).json({"message":"Success","data" : answers})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve answers from the database"})
    })
    
}

exports.unlinkAnswer = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)
    const idAnswer = parseInt(req.params.idAnswer)

    listRAsModel.unlinkAnswer(idRemark,idAnswer)
    .then(()=>{
        res.status(200).json({"message":"Success"})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to unlink the answer in the database"})
    })

}

exports.linkAnswer = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)
    const idAnswer = parseInt(req.params.idAnswer)

    listRAsModel.linkAnswer(idRemark,idAnswer)
    .then(()=>{
        res.status(201).json({"message":"Success"})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to link the answer in the database"})
    })
}

exports.encounter = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)
    const idUser = jwt.decode(req.body.token).idUser

    encountersModel.encounter(idRemark,idUser)
    .then(()=>{
        res.status(201).json({"message":"Success"})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to encounter in the database"})
    })
}

exports.deleteEncounter = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)
    const idUser = jwt.decode(req.body.token).idUser
    
    encountersModel.deleteEncounter(idRemark,idUser)
    .then(()=>{
        res.status(200).json({"message":"Success"})
    })
    .catch(err => {
        res.status(400).json({"message" : "Error, not able to delete the encounter in the database"})
    })
}

exports.getNbEncounter = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)

    
    encountersModel.getNbEncounter(idRemark)
    .then(nbEncounter=>{
        res.status(200).json({"message":"Success","data" : nbEncounter})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve data from the database"})
    })
}

exports.getRemarksByUser = (req,res) =>{
    const idUser = parseInt(req.params.idUser)

    remarksModel.getRemarksByUser(idUser)
    .then(remarks=>{
        res.status(200).json({"message":"Success","data" : remarks})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve remarks from the database"})
    })
    
}
