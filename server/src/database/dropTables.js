import dbClient from './index';

const dropTables = `
  DROP TABLE IF EXISTS users CASCADE
  `;

/**
  * @function dropDatabaseTables
  * @description drops database tables
  * @returns {*} nothing
  */
const dropDatabaseTables = async () => {
  await dbClient.query(dropTables).then(() => {
    // eslint-disable-next-line no-console
    console.log('Tables successfully dropped');
  });
};

dropDatabaseTables();
