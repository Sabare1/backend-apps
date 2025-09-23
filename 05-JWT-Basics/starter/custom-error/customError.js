class customAPIError extends Error{
    constructor(message){
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = customAPIError;