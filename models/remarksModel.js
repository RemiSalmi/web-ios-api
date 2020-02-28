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

module.exports.getRemarksByUser = (idUser) =>{

    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "Remark" WHERE "idUser" = $1', [idUser], (err, res) => {
            if (err) {
                reject(err)
            } else {
                let remarks = res.rows.map(remark => new Remark(remark.idRemark,remark.remark,remark.idCategory,remark.idUser))
                resolve(remarks)
            }
        })
    })
}

module.exports.update = (idRemark, remark, idCategory) =>{
    return new Promise(function (resolve, reject) {

        if (remark == null){
            pool.query('UPDATE "Remark" SET "idCategory" = $2 WHERE "idRemark" = $1', [idRemark, idCategory], (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        }else{

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
    }
    })
}