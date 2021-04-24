/* eslint-disable import/prefer-default-export */
import db from '../database';

/**
  * @function findByEmail
  * @description searches the users table for user email
  * @param {string} email user email address
  * @returns {object} user object
  */
export const findByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email=$1';
  const response = await db.query(query, [email]);
  return response;
};

/**
  * @function findById
  * @description searches the users table for user email
  * @param {string} id user id
  * @returns {object} user object
  */
export const findById = async (id) => {
  const query = 'SELECT * FROM users WHERE id=$1';
  const response = await db.query(query, [id]);
  return response;
};

/**
  * @function insertUser
  * @description searches the users table for user email
  * @param {string} email user email address
  * @param {string} password user password
  * @returns {object} user object
  */
export const insertUser = async ({ email, password }) => {
  const query = 'INSERT  INTO users ("email", "password") VALUES ($1, $2) RETURNING "email","password"';
  const response = await db.query(query, [email, password]);
  return response;
};
