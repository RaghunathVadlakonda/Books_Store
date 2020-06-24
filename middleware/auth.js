const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = function(req, res, next) {

    // Get token from header.
    const token = req.header('x-auth-token');

    // If token not available.
    if(!token) {
        return res.status(401).json({msg:'No token available, authorization denied!'})
    }

    try {

        // Verify token
        const decoded = jwt.verify(token, config.get('jwtToken'));
        req.user = decoded.user;
        next();
        
    } catch (err) {
        res.status(401).json({msg: 'token is not valid!'})
    }
};