const {customAPIError, BadRequest} = require('../custom-error');
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const { username, password } = req.body;
    const id = new Date().getDate();
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});
    if(!username || !password){
        throw new BadRequest("Missing username or password");
    }
    res.status(200).json({msg: "User created", token});
}

const dashBoard = (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello there ${req.user.username}`, secret:`Here's your lucky number ${luckyNumber}`});
}

module.exports = {login, dashBoard};