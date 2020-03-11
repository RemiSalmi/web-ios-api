const answersModel = require('../models/answersModel')
const commentsModel = require('../models/commentsModel')
const likesModel = require('../models/likesModel')

//Init jwt
var jwt = require('jsonwebtoken');
const secret = require('../config/security')

exports.readAll = (req,res) =>{
    answersModel.readAll()
    .then(answers =>{
        res.status(200).json({"message":"Success","data" : answers})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve answers from the database"})
    })
}


exports.getAllLikes = (req,res) =>{
    likesModel.getAllLikes()
    .then(likes =>{
        res.status(200).json({"message":"Success","data" : likes})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve answers from the database"})
    })
}


exports.create = (req,res) =>{
    const answer = req.body.answer
    const idCategory = req.body.idCategory
    const idUser = jwt.decode(req.body.token).idUser

    answersModel.create(answer, idCategory, idUser)
    .then(queryRes =>{
        let idAnswer = queryRes.rows[0]
        res.status(201).json({"message":"Success", "data" : idAnswer})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to create an answer in the database"})
    })
}

exports.read = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)

    answersModel.read(idAnswer)
    .then(answer=>{
        res.status(200).json({"message":"Success","data" : answer})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve the answer from the database"})
    })
}

exports.delete = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)

    answersModel.delete(idAnswer)
    .then(() =>{
        res.status(200).json({"message":"Success"})
    })
    .catch(err =>{
        console.log(err)
        res.status(400).json({"message" : "Error, not able to delete the answer in the database"})
    })
}

exports.update = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)
    const answer = req.body.answer
    const idCategory = req.body.idCategory

    answersModel.update(idAnswer, answer, idCategory)
    .then(() =>{
        res.status(200).json({"message":"Success"})
    })
    .catch(err =>{
        console.log(err)
        res.status(400).json({"message" : "Error, not able to update the answer in the database"})
    })
}

exports.getNbLikes = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)


    likesModel.getNbLikes(idAnswer)
    .then(nbLike=>{
        res.status(200).json({"message":"Success","data" : nbLike})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve data from the database"})
    })

}

exports.addLike = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)
    const idUser = jwt.decode(req.body.token).idUser

    likesModel.addLike(idAnswer,idUser)
    .then(()=>{
        res.status(201).json({"message":"Success"})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to add a like in the database"})
    })
}

exports.deleteLike = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)
    const idUser = jwt.decode(req.body.token).idUser

    likesModel.deleteLike(idAnswer,idUser)
    .then(()=>{
        res.status(200).json({"message":"Success"})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to delete a like in the database"})
    })
}

exports.addComment = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)
    const comment = req.body.comment
    const idUser = jwt.decode(req.body.token).idUser

    commentsModel.addComment(idAnswer,comment,idUser)
    .then(()=>{
        res.status(201).json({"message":"Success"})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to add a comment in the database"})
    })
}

exports.getAllCommentsByAnswer = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)

    commentsModel.getAllCommentsByAnswer(idAnswer)
    .then(comments=>{
        res.status(200).json({"message":"Success","data" : comments})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve comments from the database"})
    })
}

exports.deleteComment = (req,res) =>{
    const idComment = parseInt(req.params.idComment)

    commentsModel.deleteComment(idComment)
    .then(()=>{
        res.status(200).json({"message":"Success"})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to delete a comment in the database"})
    })
}
