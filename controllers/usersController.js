const usersModel = require('../models/usersModel')


exports.readAll = (req,res) =>{
    usersModel.readAll()
    .then(users =>{
        res.json(users)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.create = (req,res) =>{
    const pseudo = req.body.inputPseudo
    const password = req.body.inputPassword

    usersModel.create(pseudo,password)
    .then(() =>{
        res.sendStatus(201)
    })
    .catch(err =>{
        res.sendStatus(500)
    })
    
}

exports.delete = (req,res) =>{
    const idUser = parseInt(req.params.idUser)

    usersModel.delete(idUser)
    .then(() =>{
        res.sendStatus(200)
    })
    .catch(err =>{
        res.sendStatus(500)
    })
}

exports.read = (req,res) =>{
    const idUser = parseInt(req.params.idUser)

    usersModel.read(idUser)
    .then(user =>{
        res.json(user)
    })
    .catch(err =>{
        res.sendStatus(500)
    })
}

exports.update = (req,res) =>{
    const idUser = parseInt(req.params.idUser)
    const password = req.body.inputPassword

    usersModel.update(idUser, password)
    .then(() =>{
        res.sendStatus(200)
    })
    .catch(err =>{
        res.sendStatus(500)
    })

}

exports.login = (req,res) =>{
    
}

exports.logout = (req,res) =>{
    
}