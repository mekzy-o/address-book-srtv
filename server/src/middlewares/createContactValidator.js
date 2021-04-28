import { check, validationResult } from 'express-validator';
import { InvalidRequestBodyError } from '../helpers/error';

// Express validator middleware for validating firebase create contact endpoint
const createContactValidation = {
  contactDetails: [
    check('firstName')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('First name of contact is required'),
    check('lastName')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Last name of contact is required'),
    check('phone')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Phone number of contact is required')
      .matches(/^([+]?\d{1,3}|)\d{3}\d{3}\d{4}$/)
      .withMessage('Please enter a valid phone number'),
    check('address')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Address of contact is required'),
    (req, res, next) => {
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
export default createContactValidation;
