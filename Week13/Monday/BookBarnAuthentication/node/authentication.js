const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    let headers = req.headers['authorization']
    
    if(headers) {
        const token = headers.split(' ')[1]
        var decoded = jwt.verify(token, 'mffie');
        if(decoded) {
            const username = decoded.username
            const persistedUser = users.find(user => user.username == username)
            if(persistedUser) {
                next()
            } else {
                res.json({error: 'Invalid credentials'})
            }
        } else {
            res.json({error: 'Unathorized access'})
        }
    } else {
        res.json({error: 'Unauthorized access'})
    }

}

module.exports = authenticate