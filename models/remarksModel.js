const pool = require('../config/database')

class Remark {
    constructor(idRemark, remark, idCategory, idUser,location,dateCreation) {
        this.idRemark = idRemark;
        this.remark = remark
        this.idCategory = idCategory
        this.idUser = idUser
        this.location = location,
        this.dateCreation = dateCreation
    }
}

module.exports = Remark

class Link {
    constructor(idRemark, idAnswer) {
        this.idRemark = idRemark;
        this.idAnswer = idAnswer;
    }
}

module.exports = Link


module.exports.readAll = (req,res) =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "Remark"', (err, res) => {
            if (err) {
                reject(err)
            } else {
                let remarks = res.rows.map(remark => new Remark(remark.idRemark,remark.remark,remark.idCategory,remark.idUser,remark.location,remark.dateCreation))
                let testDate = new Date(res.rows[5].dateCreation)
                console.log(testDate.getFullYear())
                resolve(remarks)

            }
        })
    })
}

module.exports.getLinks = (req,res) =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "ListRA"', (err, res) => {
            if (err) {
                reject(err)
            } else {
                let links = res.rows.map(link => new Link(link.idRemark,link.idAnswer))
                resolve(links)

            }
        })
    })
}

module.exports.create = (remark,idCategory,idUser,location) =>{
    return new Promise(function (resolve, reject) {
        pool.query('INSERT INTO "Remark" ("remark","idCategory","idUser","location","dateCreation") VALUES ($1, $2, $3, $4, $5) RETURNING "idRemark";', [remark,idCategory,idUser,location,new Date()], (err, res) => {
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
                let remark = res.rows.map(remark => new Remark(remark.idRemark,remark.remark,remark.idCategory,remark.idUser,remark.location,remark.dateCreation))
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
                let remarks = res.rows.map(remark => new Remark(remark.idRemark,remark.remark,remark.idCategory,remark.idUser,remark.location,remark.dateCreation))
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
