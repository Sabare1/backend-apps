const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { UnauthError } = require('../errors');

const authorize = async (req, res, next) => {
    const authHead = req.body.authorization;
    if(!authHead || !authHead.startsWith('Bearer ')){
        throw new UnauthError("unauthorized to access");
    }
    const token = authHead.split(' ')[1];
    console.log(jwt.verify({token}, process.env.JWT_SECRET));
    next();
} 

module.exports = authorize;