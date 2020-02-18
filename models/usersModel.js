const pool = require('../config/database')

class User {
    constructor(idUser, pseudo, password, role) {
        this.idUser = idUser;
        this.pseudo = pseudo
        this.password = password
        this.role = role
    }
}

module.exports = User

module.exports.readAll = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM "User"', (err, res) => {
            if (err) {
                reject(err)
            } else {
                let users = res.rows.map(user => new User(user.idUser,user.pseudo,user.password,user.role))
                resolve(users)

            }
        })
    })
}