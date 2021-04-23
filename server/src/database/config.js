require('dotenv').config();

const env = process.env.ENV || process.env.NODE_ENV;

const dbConfig = {
  test: {
    user: 'postgres',
    database: 'testdb',
    password: '',
  },
  dev: {
    connectionString: process.env.DATABASE_URL,
  },
  production: {
    connectionString: process.env.DATABASE_URL,
  },
};

let credentials = dbConfig[env];
if (!credentials) credentials = dbConfig.dev;

const config = credentials;

export default config;
