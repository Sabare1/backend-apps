const { createError, customAPIError } = require('../custom-error/customError.js'); 

const errorHandler = (err, req, res, next) => {
    if(err instanceof customAPIError){
        return res.status(err.statusCode).json({msg: err.message});
    }
    res.status(500).json({msg:"Something went wrong"});
}

module.exports = errorHandler;