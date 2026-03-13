/**
 * Sends a standard API error response.
 * @param {Error & { statusCode?: number }} error
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 * @param {import('express').NextFunction} next
 */
function errorHandler(error, request, response, next) {
  if (response.headersSent) {
    return next(error);
  }

  const statusCode = error.statusCode || 500;
  console.error(error);

  response.status(statusCode).json({
    success: false,
    data: null,
    error: error.message || 'Error interno del servidor'
  });
}

module.exports = errorHandler;
