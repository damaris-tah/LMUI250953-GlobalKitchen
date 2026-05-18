function errorHandler(err, req, res, next) {
    console.error(err.stack); // log error details
    res.status(500).json({ message: err.message }); // send error response
  }
  
  module.exports = errorHandler;
  