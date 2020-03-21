const pool = require('../config/database')

class Category {
    constructor(idCategory, lib, type) {
        this.idCategory = idCategory;
        this.lib = lib
        this.type = type
    }
}

module.exports = Category

module.exports.readAll = () =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "Category"', (err, res) => {
            if (err) {
                reject(err)
            } else {
                let categories = res.rows.map(category => new Category(category.idCategory,category.lib,category.type))
                resolve(categories)

            }
        })
    })
}

module.exports.readAllAnswer = () =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "Category" WHERE "type" = $1 ',['answer'], (err, res) => {
            if (err) {
                reject(err)
            } else {
                let categories = res.rows.map(category => new Category(category.idCategory,category.lib,category.type))
                resolve(categories)

            }
        })
    })
}

module.exports.readAllRemark = () =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "Category" WHERE "type" = $1 ',['remark'], (err, res) => {
            if (err) {
                reject(err)
            } else {
                let categories = res.rows.map(category => new Category(category.idCategory,category.lib,category.type))
                resolve(categories)

            }
        })
    })
}

module.exports.read = (idCategory) =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "Category" WHERE "idCategory" = $1 ',[idCategory], (err, res) => {
            if (err) {
                reject(err)
            } else {
                let categories = res.rows.map(category => new Category(category.idCategory,category.lib,category.type))
                resolve(categories)

            }
        })
    })
}

module.exports.create = (lib,type) =>{
    return new Promise(function (resolve, reject) {
        pool.query('INSERT INTO "Category" ("lib","type") VALUES ($1, $2) RETURNING "idCategory";', [lib,type], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports.update = (idCategory,lib,type) =>{
    return new Promise(function (resolve, reject) {
        pool.query('UPDATE "Category" SET lib = $2, type = $3 WHERE "idCategory" = $1', [idCategory,lib,type], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports.delete = (idCategory) =>{
    return new Promise(function (resolve, reject) {
        pool.query('DELETE FROM "Category" WHERE "idCategory" = $1', [idCategory], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}
