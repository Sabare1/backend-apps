const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const jsonwebtoken = require("jsonwebtoken");

const register = async (req, res) => {
    const token = jsonwebtoken.sign()
    await User.create({...req.body});
    res.status(StatusCodes.CREATED).json({msg: "Successfully registered"});
}

const login = (req, res) => {
    res.status(200).json({msg: "login user"});
}

module.exports = {register, login};