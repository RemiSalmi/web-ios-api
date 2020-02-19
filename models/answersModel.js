const pool = require('../config/database')

class Answer {
    constructor(idAnswer, answer, idCategory, idUser) {
        this.idAnswer = idAnswer;
        this.answer = answer
        this.idCategory = idCategory
        this.idUser = idUser
    }
}

module.exports = Answer

module.exports.readAllByRemarkID = (idRemark) =>{

    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "Answer" a JOIN "ListRA" l ON a."idAnswer" = l."idAnswer" WHERE l."idRemark" = $1', [idRemark], (err, res) => {
            if (err) {
                reject(err)
            } else {
                let answers = res.rows.map(answer => new Answer(answer.idAnswer,answer.answer,answer.idCategory,answer.idUser))
                resolve(answers)
            }
        })
    })
}



module.exports.readAll = () =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "Answer"', (err, res) => {
            if (err) {
                reject(err)
            } else {
                let answers = res.rows.map(answer => new Answer(answer.idAnswer,answer.answer,answer.idCategory,answer.idUser))
                resolve(answers)

            }
        })
    })
}

module.exports.create = (answer, idCategory, idUser) =>{
    return new Promise(function (resolve, reject) {
        pool.query('INSERT INTO "Answer" ("answer","idCategory","idUser") VALUES ($1, $2, $3);', [answer,idCategory,idUser], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports.read = (idAnswer) =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "Answer" WHERE "idAnswer" = $1', [idAnswer], (err, res) => {
            if (err) {
                reject(err)
            } else {
                let answer = res.rows.map(answer => new Answer(answer.idAnswer,answer.answer,answer.idCategory,answer.idUser))
                resolve(answer)
            }
        })
    })
}

module.exports.delete = (idAnswer) =>{
    return new Promise(function (resolve, reject) {
        pool.query('DELETE FROM "Answer" WHERE "idAnswer" = $1', [idAnswer], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports.update = (idAnswer, answer, idCategory) =>{
    return new Promise(function (resolve, reject) {
        if(answer == null){
            pool.query('UPDATE "Answer" SET "idCategory" = $2 WHERE "idAnswer" = $1', [idAnswer,idCategory], (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        }else{

        if (idCategory == null){
            pool.query('UPDATE "Answer" SET answer = $2 WHERE "idAnswer" = $1', [idAnswer,answer], (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            }) 
        }else{
            pool.query('UPDATE "Answer" SET answer = $2, "idCategory" = $3 WHERE "idAnswer" = $1', [idAnswer,answer,idCategory], (err, res) => {
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


