const {customAPIError} = require('../custom-error/customError.js');

const login = (req, res) => {
    const { username, password } = req.body;
    if(!username || !password){
        throw new customAPIError("Missing username or password", 400);
    }
    res.status(200).send("Fake Login/Register/SignUp");
}

const dashBoard = (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello there john`, secret:`Here's your lucky number ${luckyNumber}`});
}

module.exports = {login, dashBoard};