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
        res.json(remarks)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.create = (req,res) =>{
    const remark = req.body.remark
    const idCategory = req.body.idCategory
    const idUser = jwt.decode(req.body.token).idUser

    remarksModel.create(remark, idCategory, idUser)
    .then(()=>{
        res.sendStatus(201)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.read = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)

    remarksModel.read(idRemark)
    .then(remark=>{
        res.json(remark)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.delete = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)

    remarksModel.delete(idRemark)
    .then(() =>{
        res.sendStatus(200)
    })
    .catch(err =>{
        res.sendStatus(500)
    })
}

exports.update = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)
    const remark = req.body.remark
    const idCategory = req.body.idCategory

    remarksModel.update(idRemark, remark, idCategory)
    .then(() =>{
        res.sendStatus(200)
    })
    .catch(err =>{
        console.log(err)
        res.sendStatus(500)
    })
}

exports.readAllAnswers = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)

    answersModel.readAllByRemarkID(idRemark)
    .then(answers=>{
        res.json(answers)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
    
}

exports.unlinkAnswer = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)
    const idAnswer = parseInt(req.params.idAnswer)

    listRAsModel.unlinkAnswer(idRemark,idAnswer)
    .then(()=>{
        res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })

}

exports.linkAnswer = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)
    const idAnswer = parseInt(req.params.idAnswer)

    listRAsModel.linkAnswer(idRemark,idAnswer)
    .then(()=>{
        res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.encounter = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)
    const idUser = jwt.decode(req.body.token).idUser

    encountersModel.encounter(idRemark,idUser)
    .then(()=>{
        res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.deleteEncounter = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)
    const idUser = jwt.decode(req.body.token).idUser
    
    encountersModel.deleteEncounter(idRemark,idUser)
    .then(()=>{
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(401)
    })
}

exports.getNbEncounter = (req,res) =>{
    const idRemark = parseInt(req.params.idRemark)

    
    encountersModel.getNbEncounter(idRemark)
    .then(nbEncounter=>{
        res.json(nbEncounter)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

