const pool = require('../config/database')

class Remark {
    constructor(idRemark, remark, idCategory, idUser) {
        this.idRemark = idRemark;
        this.remark = remark
        this.idCategory = idCategory
        this.idUser = idUser
    }
}

module.exports = Remark


module.exports.readAll = (req,res) =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "Remark"', (err, res) => {
            if (err) {
                reject(err)
            } else {
                let remarks = res.rows.map(remark => new Remark(remark.idRemark,remark.remark,remark.idCategory,remark.idUser))
                resolve(remarks)

            }
        })
    })
}

module.exports.create = (remark,idCategory,idUser) =>{
    return new Promise(function (resolve, reject) {
        pool.query('INSERT INTO "Remark" ("remark","idCategory","idUser") VALUES ($1, $2, $3);', [remark,idCategory,idUser], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports.read = (idRemark) =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "Remark" WHERE "idRemark" = $1', [idRemark], (err, res) => {
            if (err) {
                reject(err)
            } else {
                let remark = res.rows.map(remark => new Remark(remark.idRemark,remark.remark,remark.idCategory,remark.idUser))
                resolve(remark)
            }
        })
    })
}

module.exports.delete = (idRemark) =>{
    return new Promise(function (resolve, reject) {
        pool.query('DELETE FROM "Remark" WHERE "idRemark" = $1', [idRemark], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports.update = (idRemark, remark, idCategory) =>{
    return new Promise(function (resolve, reject) {

        if (idCategory == null){
            pool.query('UPDATE "Remark" SET remark = $2 WHERE "idRemark" = $1', [idRemark,remark], (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            }) 
        }else{
            pool.query('UPDATE "Remark" SET remark = $2, "idCategory" = $3 WHERE "idRemark" = $1', [idRemark,remark,idCategory], (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        }    
    })
}

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

