import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const tokenSecret = process.env.SECRET_KEY;

/**
  * @function generateToken
  * @description takes in the user details as parameter and generates a token
  * @param {object} details user details
  * @param {string} exp token expiration time
  * @returns {string} jwt token
  */
export const generateToken = (details, exp = '12h') => jwt.sign({ ...details }, tokenSecret, { expiresIn: exp });

/**
  * @function verifyToken
  * @description takes in the user token as parameter and verifies if it's valid
  * @param {string} token user token
  * @returns {string} jwt token
  */
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, tokenSecret);
  } catch (error) {
    return false;
  }
};

/**
  * @function verifyToken
  * @description takes in the user token as parameter and verifies if it's valid
  * @param {string} password user password
  * @returns {string} hashed password
  */
export const hashPassword = (password) => bcrypt.hashSync(password, 10);

/**
  * @function validateHash
  * @description checks for validity by comparing the user inputted password and the hashed database
  * @param {string} password inputed user password
  * @param {string} hash hashed user password
  * @returns {boolean} boolean result of the password validation
  */
export const validateHash = (password, hash) => bcrypt.compareSync(password, hash);
