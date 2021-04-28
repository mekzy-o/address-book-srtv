/* eslint-disable import/prefer-default-export */
import * as UserRepository from '../repositories/user';
import {
  generateToken, validateHash, hashPassword, verifyToken,
} from '../helpers/auth';
import { filterOutFields } from '../helpers/utils';

const tokenSecret = process.env.SECRET_KEY;

/**
  * @function signinUser
  * @description creates a new user in the user database
  * @param {string} email the user email
  * @param {string} password the user password
  * @returns {object} user object
  */
export const signinUser = async ({ email, password }) => {
  const findUser = await UserRepository.findByEmail(email);
  const authData = findUser;
  if (!authData) return { error: 'User Email doesn\'t exist' };

  const isValidPassword = validateHash(password, authData.password);
  if (!isValidPassword) return { error: 'Password and email doesnt match' };
  const { id, email: userEmail } = authData;
  const token = generateToken({ id, userEmail });
  return { token, ...filterOutFields(authData) };
};

/**
  * @function registerUser
  * @description creates a new user in the user database
  * @param {object} userDetails the user email
  * @returns {object} user object
  */
export const registerUser = async (userDetails) => {
  if (!userDetails) throw new Error('User Details is required');

  const { email, password } = userDetails;

  const result = await UserRepository.findByEmail(email);
  const userExist = !!(result);

  if (userExist) return { error: 'User With that email already exists' };
  userDetails.password = hashPassword(userDetails.password);
  await UserRepository.insertUser(userDetails);
  return signinUser({ email, password });
};

/**
  * @function validateHash
  * @description checks for validity by comparing the user inputted password and the hashed database
  * @param {string} token hashed user password
  * @returns {boolean} boolean result of the password validation
  */
export const validateToken = async (token) => {
  const { id } = verifyToken(token, tokenSecret);
  if (!id) return { error: 'token could not be verified.' };
  const result = await UserRepository.findById(id);
  if (!result) return { error: 'Cannot retrieve a user for the specified token.' };
  return { token, ...filterOutFields(result) };
};
