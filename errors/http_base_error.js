class HTTPBaseError extends Error{
    constructor(httpStatusCode, httpMsg, errCode, msg) {
        super(`Http Error ${msg}`);
        this.httpStatusCode = httpStatusCode;
        this.httpMsg = httpMsg;
        this.errCode = errCode;
    }
}

module.exports = HTTPBaseError
