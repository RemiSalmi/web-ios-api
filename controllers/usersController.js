const usersModel = require('../models/usersModel')

//Init jwt
var jwt = require('jsonwebtoken');
const secret = require('../config/security')

//Init bcrypt
const bcrypt = require('bcrypt');

exports.readAll = (req,res) =>{
    usersModel.readAll()
    .then(users =>{
        res.status(200).json({"message":"Success","data" : users})
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({"message" : "Error, not able to retrieve users from the database"})
    })
}

exports.create = (req,res) =>{
    const pseudo = req.body.pseudo
    const password = req.body.password

    const encryptedPass = bcrypt.hashSync(password, 10)

    usersModel.create(pseudo,encryptedPass)
    .then(queryRes =>{
        let idUser = queryRes.rows[0]
        res.status(201).json({"message":"Success","data":idUser})
    })
    .catch(err =>{
        res.status(400).json({"message" : "Error, not able to create an user in the database"})
    })

}

exports.delete = (req,res) =>{
    const idUser = parseInt(req.params.idUser)

    usersModel.delete(idUser)
    .then(() =>{
        res.status(200).json({"message":"Success"})
    })
    .catch(err =>{
        res.status(400).json({"message" : "Error, not able to delete the user in the database"})
    })
}

exports.read = (req,res) =>{
    const idUser = parseInt(req.params.idUser)

    usersModel.read(idUser)
    .then(user =>{
        res.status(200).json({"message":"Success","data" : user})
    })
    .catch(err =>{
        res.status(400).json({"message" : "Error, not able to retrieve the user from the database"})
    })
}

exports.update = (req,res) =>{
    const idUser = parseInt(req.params.idUser)
    //const idUser = jwt.decode(req.body.token).idUser
    const password = req.body.password
    const encryptedPass = bcrypt.hashSync(password, 10)

    usersModel.update(idUser, encryptedPass)
    .then(() =>{
        res.status(200).json({"message":"Success"})
    })
    .catch(err =>{
        res.status(400).json({"message" : "Error, not able to update the user in the database"})
    })

}


exports.updateRole = (req,res) =>{
    const idUser = parseInt(req.params.idUser)
    const role = req.body.role

    usersModel.updateRole(idUser, role)
    .then(() =>{
        res.status(200).json({"message":"Success"})
    })
    .catch(err =>{
        res.status(400).json({"message" : "Error, not able to update the user in the database"})
    })

}





exports.login = (req,res) =>{
    const pseudo = req.body.pseudo
    const password = req.body.password

    usersModel.getUserByPseudo(pseudo)
    .then(reqRes =>{

        if(reqRes.rowCount > 0 ){
            if(bcrypt.compareSync(password, reqRes.rows[0].password)){
                let token = jwt.sign({ idUser: reqRes.rows[0].idUser, role: reqRes.rows[0].role }, secret)
                res.status(200).json({"message":"Success","data" : {"token": token}})
            }else{
                res.status(401).json({"message" : "Error, bad password"})
            }

        }else{
            res.status(401).json({"message" : "Error, bad user"})
        }

    })
    .catch(err =>{
        res.status(400).json({"message" : "Error, not able to retrieve data from the database"})
    })
}

exports.logout = (req,res) =>{

}
