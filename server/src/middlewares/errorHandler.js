/** @description Handles  uncaught erros in the app
* @function ErrorHandler
* @param {object} err
* @param {object} req
* @param {object} res
* @param {function} _next
* @returns {(function|object)} Function next() or JSON API response
*/
export const ErrorHandler = (err, req, res, _next) => {
  if (err.status) res.status(err.status).json(err);
  else res.status(500).json({ status: 500, error: err.message });
  // next(err);
};
