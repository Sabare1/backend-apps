const {customAPIError} = require('./customError.js');
const {StatusCodes} = require('http-status-codes')

class UnauthErr extends customAPIError{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnauthErr;