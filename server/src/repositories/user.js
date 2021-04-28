/* eslint-disable import/prefer-default-export */
import models from '../database/models';

const { User } = models;

/**
  * @function findByEmail
  * @description searches the users table for user email
  * @param {string} email user email address
  * @returns {object} user object
  */
export const findByEmail = async (email) => {
  const findEmail = await User.findOne({ where: { email } });
  return findEmail;
};

/**
  * @function findById
  * @description searches the users table for user email
  * @param {string} id user id
  * @returns {object} user object
  */
export const findById = async (id) => {
  const findId = await User.findOne({ where: { id } });
  return findId;
};

/**
  * @function insertUser
  * @description searches the users table for user email
  * @param {string} email user email address
  * @param {string} password user password
  * @returns {object} user object
  */
export const insertUser = async ({ email, password }) => {
  const createUser = User.create({ email, password });
  return createUser;
};
