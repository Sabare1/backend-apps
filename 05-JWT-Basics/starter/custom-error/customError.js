class customAPIError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

const createError = (message, statusCode)=> {
    return new customAPIError(message, statusCode);
}

module.exports = {createError, customAPIError};