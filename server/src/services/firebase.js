import Firebase from '../database/firebase/createFirebaseDB';

/**
  * @function createContact
  * @description creates a new user in the user database
  * @param {string} token user token
  * @param {object} body contact details
  * @returns {*} nothing
  */
const createContact = async (token, body) => {
  const result = await Firebase.createContact(token, body);
  return result;
};

export { createContact };
