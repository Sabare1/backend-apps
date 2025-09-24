const register = (req, res) => {
    res.status(200).json({msg: "register user"});
}

const login = (req, res) => {
    res.status(200).json({msg: "login user"});
}

module.exports = {register, login};