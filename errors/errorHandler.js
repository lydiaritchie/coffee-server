/**
 * Express API error handler.
 */
function errorHandler(error, res, req, next) {
    const { status = 500, message = "Something went wrong!" } = error;
    res.status(status).json({ error: message });
  }
  
  module.exports = errorHandler;