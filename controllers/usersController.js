const userModel = require('../models/usersModel')


exports.readAll = (req,res) =>{
    userModel.readAll()
    .then(users =>{
        res.json(users)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(401)
    })
}

exports.create = (req,res) =>{

}

exports.delete = (req,res) =>{
    
}

exports.read = (req,res) =>{
    
}

exports.update = (req,res) =>{
    
}

exports.login = (req,res) =>{
    
}

exports.logout = (req,res) =>{
    
}