const pool = require('../config/database')

class Like {
    constructor(idAnswer, idUser) {
        this.idAnswer = idAnswer
        this.idUser = idUser
    }
}

module.exports = Like

module.exports.getNbLikes = (idAnswer) =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT count(*) FROM "Like" WHERE "idAnswer" = $1', [idAnswer], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res.rows[0])
            }
        })
    })
}

module.exports.addLike = (idAnswer,idUser) =>{
    return new Promise(function (resolve, reject) {
        pool.query('INSERT INTO "Like" ("idAnswer", "idUser") VALUES ($1, $2)', [idAnswer,idUser], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports.deleteLike = (idAnswer,idUser) =>{
    return new Promise(function (resolve, reject) {
        pool.query('DELETE FROM "Like" WHERE "idAnswer" = $1 and "idUser" = $2', [idAnswer,idUser], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}