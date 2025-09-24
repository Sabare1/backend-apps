const { CustomAPIError } = require('../custom-error'); 
const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message});
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"Something went wrong"});
}

module.exports = errorHandler;