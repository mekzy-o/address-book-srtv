import dbClient from './index';

const createTables = `
  CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(130) UNIQUE NOT NULL,
    password VARCHAR(200) NOT NULL
  );
  `;
/**
  * @function createDatabaseTables
  * @description creates the database tables
  * @returns {*} nothing
  */
const createDatabaseTables = async () => {
  await dbClient.query(createTables).then(() => {
    // eslint-disable-next-line no-console
    console.log('Tables successfully created');
  });
};

createDatabaseTables();
