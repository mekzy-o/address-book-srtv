import { Pool } from 'pg';
import config from './config';

const { connectionString } = config;

const pool = new Pool({ connectionString });

export default {
  /**
   * Query Database
   * @function query
   * @param {string} text - Query Text
   * @param {array} params - Query Values
   * @returns {*} Object
   */
  query(text, params) {
    return new Promise((resolve, reject) => {
      pool.query(text, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
