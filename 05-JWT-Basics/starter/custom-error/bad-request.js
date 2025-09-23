const {customAPIError} = require('./customError.js')
const { StatusCodes } = require('http-status-codes'); 

class BadRequest extends customAPIError{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequest;