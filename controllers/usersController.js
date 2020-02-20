const usersModel = require('../models/usersModel')

//Init jwt
var jwt = require('jsonwebtoken');
const secret = require('../config/security')

//Init bcrypt
const bcrypt = require('bcrypt');

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

    const encryptedPass = bcrypt.hashSync(password, 10)

    usersModel.create(pseudo,encryptedPass)
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
    const pseudo = req.body.inputPseudo
    const password = req.body.inputPassword
    
    usersModel.getUserByPseudo(pseudo)
    .then(reqRes =>{

        if(reqRes.rowCount > 0 ){
            if(bcrypt.compareSync(password, reqRes.rows[0].password)){
                let token = jwt.sign({ idUser: reqRes.rows[0].idUser, role: reqRes.rows[0].role }, secret)
                res.json({token : token})
            }else{
                res.sendStatus(401)
            }
            
        }else{
            res.sendStatus(401)
        }
        
    })
    .catch(err =>{
        res.sendStatus(401)
    })
}

exports.logout = (req,res) =>{

}