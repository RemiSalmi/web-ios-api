const pool = require('../config/database')

class ListRA {
    constructor(idRemark, idAnswer) {
        this.idRemark = idRemark;
        this.idAnswer = idAnswer
    }
}

module.exports = ListRA

module.exports.unlinkAnswer = (idRemark,idAnswer) =>{
    return new Promise(function (resolve, reject) {
        pool.query('DELETE FROM "ListRA" WHERE "idRemark" = $1 and "idAnswer" = $2', [idRemark,idAnswer], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports.linkAnswer = (idRemark,idAnswer) =>{
    return new Promise(function (resolve, reject) {
        pool.query('INSERT INTO "ListRA" ("idRemark", "idAnswer") VALUES ($1, $2)', [idRemark,idAnswer], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}