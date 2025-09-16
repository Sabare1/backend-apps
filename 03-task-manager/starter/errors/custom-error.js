class CustomAPIError extends Error{
    constructor(message, statusCode){
        super(message);
        this.status = statusCode
    }
}

const createError = (message, statusCode) => {
    return new CustomAPIError(message, statusCode);
}

module.exports = {createError, CustomAPIError};