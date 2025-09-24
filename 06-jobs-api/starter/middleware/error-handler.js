const {CustomAPIError} = require('../errors');
const {StatusCodes} = require('http-status-codes');

const errorHandleMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message});
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"something went wrong"});
}