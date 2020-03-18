//Init jwt
const jwt = require('jsonwebtoken')
const secret = require('../config/security')

exports.isConnected = (req, res, next) => {
    if(req.headers.authorization){
        jwt.verify(req.headers.authorization, secret, (err, token) => {
            if (err) {
                res.status(401).json({"message": "Error, not connected"})
            } else {
                next()
            }
        }) 
    }else{
        if (req.body.token) {
            jwt.verify(req.body.token, secret, (err, token) => {
                if (err) {
                    res.status(401).json({"message": "Error, not connected"})
                } else {
                    next()
                }
            })
        }else {
            res.status(401).json({"message": "Error, not connected"})
        }
    }
    
}