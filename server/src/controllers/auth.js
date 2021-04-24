import { AuthService } from '../services';
import {
  UserExists, AuthenticationError,
} from '../helpers/error';
import Response from '../helpers/response';

/**
  * @function signup
  * @description Adds a user's details to the database
  * @param {object} req - The Request Object
  * @param {object} res - The Response Object
  * @param {object} next - The next function
  * @returns {object} JSON API Response
  */
export const signup = async (req, res, next) => {
  try {
    const { body } = req;
    const data = await AuthService.registerUser(body);
    if (data.error) return next(new UserExists(data.error));
    const response = new Response(data, 201);
    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

/**
  * @function signin
  * @description Logs in the user to user account
  * @param {object} req - The Request Object
  * @param {object} res - The Response Object
  * @param {object} next - The next function
  * @returns {object} JSON API Response
  */
export const signin = async (req, res, next) => {
  try {
    const { body } = req;
    const data = await AuthService.signinUser(body);
    if (data.error) return next(new AuthenticationError(data.error));
    const response = new Response(data, 200);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
