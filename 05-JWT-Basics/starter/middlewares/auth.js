const jwt = require('jsonwebtoken');
const   { UnauthErr }= require('../custom-error')

const authMiddleware = async(req, res, next) => {
    const authHead = req.headers.authorization;
    if(!authHead || !authHead.startsWith('Bearer ')){
        throw new UnauthErr("No token is present or is incorrect");
    }
    const token = authHead.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {id, username} = decoded;
        req.user = {id, username};
    } catch (error) {
        throw new UnauthErr("Not authorized to access this route");
    }
    next();
}

module.exports = authMiddleware;