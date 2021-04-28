import { check, validationResult, header } from 'express-validator';
import { InvalidRequestBodyError } from '../helpers/error';

// Express validator middleware for validating authentication endpoints
const authValidation = {
  signup: [
    check('email')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Email is required for signup')
      .isEmail()
      .trim()
      .withMessage('Please input a valid email address'),
    check('password')
      .notEmpty()
      .withMessage('password is required')
      .isLength({ min: 8 })
      .withMessage('password must be at least 8 characters'),
    (req, _res, next) => {
      const errors = validationResult(req);
      const errorMessage = {};
      if (!errors.isEmpty()) {
        errors.array({ onlyFirstError: true }).forEach((error) => {
          errorMessage[error.param] = error.msg;
        });
        return next(new InvalidRequestBodyError(errorMessage));
      }
      return next();
    },
  ],
  signin: [
    check('email')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Email is required for login')
      .isEmail()
      .trim()
      .withMessage('Please input a valid email address'),
    check('password')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Password is required')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters'),
    (req, _res, next) => {
      const errors = validationResult(req);
      const errorMessage = {};
      if (!errors.isEmpty()) {
        errors.array({ onlyFirstError: true }).forEach((error) => {
          errorMessage[error.param] = error.msg;
        });
        return next(new InvalidRequestBodyError(errorMessage));
      }
      return next();
    },
  ],
  authenticate: [
    header('authorization')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Authentication failed! Please make sure you are logged in'),
    (req, _res, next) => {
      const errors = validationResult(req);
      const errorMessage = {};
      if (!errors.isEmpty()) {
        errors.array({ onlyFirstError: true }).forEach((error) => {
          errorMessage[error.param] = error.msg;
        });
        return next(new InvalidRequestBodyError(errorMessage));
      }
      return next();
    },
  ],
};
export default authValidation;
