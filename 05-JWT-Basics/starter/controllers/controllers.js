const {customAPIError} = require('../custom-error/customError.js');
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const { username, password } = req.body;
    const id = new Date().getDate();
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});
    if(!username || !password){
        throw new customAPIError("Missing username or password", 400);
    }
    res.status(200).json({msg: "User created", token});
}

const dashBoard = (req, res) => {
    const authHead = req.headers.authorization;
    if(!authHead || !authHead.startsWith('Bearer ')){
        return res.status(401).json({msg:"No token is present or is incorrect"});
    }
    const token = authHead.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const luckyNumber = Math.floor(Math.random()*100);
        res.status(200).json({msg:`Hello there ${decoded.username}`, secret:`Here's your lucky number ${luckyNumber}`});
    } catch (error) {
        throw new customAPIError("Not authorized to access this route", 401);
    }
}

module.exports = {login, dashBoard};