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