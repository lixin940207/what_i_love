const logger = require("../utils/loggers/logger");

function handler(options) {
    return function(err, req, res)
    {
        // set locals, only providing error in development
        // res.locals.message = err.message;
        // res.locals.error = req.app.get('env') === 'development' ? err : {};
        //
        // // render the error page
        // res.status(err.status || 500);
        // res.render('error');
        logger.error('uncaught error in the middleware process', { err });

    }
}

module.exports = handler;
