const answersModel = require('../models/answersModel')
const commentsModel = require('../models/commentsModel')
const likesModel = require('../models/likesModel')

exports.readAll = (req,res) =>{
    answersModel.readAll()
    .then(answers =>{
        res.json(answers)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.create = (req,res) =>{
    const answer = req.body.inputAnswer
    const idCategory = req.body.inputIdCategory
    const idUser = 24 //Should be replace with Auth system values

    answersModel.create(answer, idCategory, idUser)
    .then(()=>{
        res.sendStatus(201)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.read = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)

    answersModel.read(idAnswer)
    .then(answer=>{
        res.json(answer)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.delete = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)

    answersModel.delete(idAnswer)
    .then(() =>{
        res.sendStatus(200)
    })
    .catch(err =>{
        console.log(err)
        res.sendStatus(500)
    })
}

exports.update = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)
    const answer = req.body.inputAnswer
    const idCategory = req.body.inputIdCategory

    answersModel.update(idAnswer, answer, idCategory)
    .then(() =>{
        res.sendStatus(200)
    })
    .catch(err =>{
        console.log(err)
        res.sendStatus(500)
    })
}

exports.getNbLikes = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)

    
    likesModel.getNbLikes(idAnswer)
    .then(nbLike=>{
        res.json(nbLike)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
    
}

exports.addLike = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)
    const idUser = 1 //Should be replace with auth system

    likesModel.addLike(idAnswer,idUser)
    .then(()=>{
        res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.deleteLike = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)
    const idUser = 1 //Should be replace with auth system

    likesModel.deleteLike(idAnswer,idUser)
    .then(()=>{
        res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.addComment = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)
    const comment = req.body.inputComment 
    const idUser = 1 //Should be replace with auth system

    commentsModel.addComment(idAnswer,comment,idUser)
    .then(()=>{
        res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.getAllCommentsByAnswer = (req,res) =>{
    const idAnswer = parseInt(req.params.idAnswer)

    commentsModel.getAllCommentsByAnswer(idAnswer)
    .then(comments=>{
        res.json(comments)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.deleteComment = (req,res) =>{
    const idComment = parseInt(req.params.idComment)

    commentsModel.deleteComment(idComment)
    .then(()=>{
        res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}