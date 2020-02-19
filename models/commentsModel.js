const pool = require('../config/database')

class Comment {
    constructor(idComment, idAnswer, comment, idUser, dateCreation) {
        this.idAnswer = idAnswer
        this.idComment = idComment
        this.comment = comment
        this.idUser = idUser
        this.dateCreation = dateCreation
    }
}

module.exports = Comment

module.exports.addComment = (idAnswer,comment,idUser) =>{
    return new Promise(function (resolve, reject) {
        pool.query('INSERT INTO "Comment" ("idAnswer", "idUser","comment") VALUES ($1, $2, $3)', [idAnswer,idUser,comment], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports.getAllCommentsByAnswer = (idAnswer) =>{
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "Comment" WHERE "idAnswer" = $1', [idAnswer], (err, res) => {
            if (err) {
                reject(err)
            } else {
                let comments = res.rows.map(comment => new Comment(comment.idComment, comment.idAnswer, comment.comment, comment.idUser, comment.dateCreation))
                resolve(comments)
            }
        })
    })
}

module.exports.deleteComment = (idComment) =>{
    return new Promise(function (resolve, reject) {
        pool.query('DELETE FROM "Comment" WHERE "idComment" = $1', [idComment], (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}