/* eslint-disable import/prefer-default-export */
import * as User from '../repositories/user';
import {
  generateToken, validateHash, hashPassword,
} from '../helpers/auth';
import { filterPassword } from '../helpers/utils';

/**
  * @function signinUser
  * @description creates a new user in the user database
  * @param {string} email the user email
  * @param {string} password the user password
  * @returns {object} user object
  */
export const signinUser = async ({ email, password }) => {
  const findUser = await User.findByEmail(email);
  const authData = findUser.rows[0];
  if (!authData) return { error: 'User Email doesn\'t exist' };

  const isValidPassword = validateHash(password, authData.password);
  if (!isValidPassword) return { error: 'Password and email doesnt match' };
  const { id, email: userEmail } = authData;
  const token = generateToken({ id, userEmail });
  return { token, ...filterPassword(authData) };
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

  const { rows: data } = await User.findByEmail(email);
  const userExist = !!(data[0]);

  if (userExist) return { error: 'User With that email already exists' };
  userDetails.password = hashPassword(userDetails.password);
  await User.insertUser(userDetails);
  return signinUser({ email, password });
};
