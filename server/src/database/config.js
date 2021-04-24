require('dotenv').config();

const env = process.env.ENV || process.env.NODE_ENV;

const dbConfig = {
  test: {
    connectionString: process.env.DATABASE_URL,
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
