const pool = require('../config/database')

class Encounter {
    constructor(idRemark, idUser) {
        this.idRemark = idRemark;
        this.idUser = idUser
    }
}

module.exports = Encounter

module.exports.encounter = (idRemark,idUser) =>{
    return new Promise(function (resolve, reject) {
        pool.query('INSERT INTO "Encounter" ("idRemark", "idUser") VALUES ($1, $2)', [idRemark,idUser], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports.deleteEncounter = (idRemark,idUser) =>{
    return new Promise(function (resolve, reject) {
        pool.query('DELETE FROM "Encounter" WHERE "idRemark" = $1 and "idUser" = $2', [idRemark,idUser], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports.getNbEncounter = (idRemark) =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT count(*) FROM "Encounter" WHERE "idRemark" = $1', [idRemark], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res.rows[0])
            }
        })
    })
}