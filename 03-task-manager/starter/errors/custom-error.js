class CustomAPIError extends Error{
    CustomAPIError(message, statusCode){
        super(message);
        this.statusCode = statusCode
    }
}

const createError = (message, statusCode) => {
    return new CustomAPIError(message, statusCode);
}

module.exports = createError;