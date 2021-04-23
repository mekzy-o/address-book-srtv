import debug from 'debug';
import { Pool } from 'pg';
import config from './config';

const log = debug('dev');
const { connectionString } = config;
export const pool = new Pool({
  connectionString,
});

pool.on('connect', () => {
  log('connected to the db');
});

pool.on('remove', () => {
  log('client removed');
  process.exit(0);
});

/**
  * @function query
  * @description queries the db
  * @param {string} queryString - the query string
  * @param {any []} values - an array with values
  * for items specified as parameters in the query string
  * @returns {*} nothing
  */
const query = (queryString, values = []) => {
  try {
    return pool.query(queryString, values);
  } catch (err) {
    log(err);
  } finally {
    pool.end();
  }
};

export default { query };
