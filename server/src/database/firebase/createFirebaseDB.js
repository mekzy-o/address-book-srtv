import firebase from 'firebase';
import config from './config';

/** Class representing a Firebase Instance. */
class Firebase {
  /**
     * Creates a firebase database in constructor
     */
  constructor() {
    this.appInstance = firebase.initializeApp(config);
    (async () => {
      this.db = this.appInstance.database();
    })();
  }

  /**
     *@method createContact
     * @param {string} id authenticated user id
     * @param {object} data contact details
     * @return {*} saved contact details
     */
  async createContact(id, data) {
    const contactRef = this.db.ref(`contacts/${id}`);
    const newContactRef = contactRef.push();
    await newContactRef.set(data);
  }
}

export default new Firebase();
