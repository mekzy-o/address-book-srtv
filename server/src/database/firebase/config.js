// import firebase from 'firebase';

const devConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

const testConfig = {
  apiKey: '28282929292839939393',
  databaseURL: 'ws://localhost.firebaseio.test:5000',
};

const config = process.env.NODE_ENV === 'test' ? testConfig : devConfig;
/**
  * @function firebaseDatabase
  * @description initializes the firebase database
  * @returns {*} instance of the firebase database
  */
// const firebaseDatabase = async () => {
//   const app = firebase.initializeApp(config);
//   return app.database();
// };
export default config;
