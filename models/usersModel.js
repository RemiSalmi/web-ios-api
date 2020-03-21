const pool = require('../config/database')

class User {
    constructor(idUser, pseudo, role) {
        this.idUser = idUser;
        this.pseudo = pseudo
        this.role = role
    }
}

module.exports = User

module.exports.readAll = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "User"', (err, res) => {
            if (err) {
                reject(err)
            } else {
                let users = res.rows.map(user => new User(user.idUser,user.pseudo,user.role))
                resolve(users)

            }
        })
    })
}

module.exports.create = (pseudo,password) =>{

    return new Promise(function (resolve, reject) {
        pool.query('INSERT INTO "User" ("pseudo","password","role") VALUES ($1, $2, $3) RETURNING "idUser";', [pseudo,password,"user"], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })


}

module.exports.delete = (idUser) =>{
    return new Promise(function (resolve, reject) {
        pool.query('DELETE FROM "User" WHERE "idUser" = $1', [idUser], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports.read = (idUser) =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "User" WHERE "idUser" = $1', [idUser], (err, res) => {
            if (err) {
                reject(err)
            } else {
                let user = res.rows.map(user => new User(user.idUser,user.pseudo,user.role))
                resolve(user)
            }
        })
    })
}

module.exports.update = (idUser,password) =>{
    return new Promise(function (resolve, reject) {
        pool.query('UPDATE "User" SET password = $2 WHERE "idUser" = $1', [idUser,password], (err, res) => {
            if (err) {
                reject(err)
            } else {
                let user = res.rows.map(user => new User(user.idUser,user.pseudo,user.role))
                resolve(user)
            }
        })
    })
}

module.exports.updateRole = (idUser,role) =>{
    return new Promise(function (resolve, reject) {
        pool.query('UPDATE "User" SET role = $2 WHERE "idUser" = $1', [idUser,role], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports.getUserByPseudo = (pseudo) =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "User" WHERE "pseudo" = $1', [pseudo], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}
