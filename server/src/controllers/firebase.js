import { FirebaseService, AuthService } from '../services';
import Response from '../helpers/response';
// import { validateToken } from '../services/'
import { AuthenticationError } from '../helpers/error';

/**
  * @function createContact
  * @description creates contact details to firebase service
  * @param {object} req - The Request Object
  * @param {object} _res - The Response Object
  * @param {object} next - The next function
  * @returns {object} JSON API Response
  */
export const createContact = async (req, _res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = await AuthService.validateToken(token);
    if (decodedToken.error) return next(new AuthenticationError(decodedToken.error));
    const data = await FirebaseService.createContact(decodedToken.id, req.body);
    return next(new Response(data, 200));
  } catch (error) {
    next(error);
  }
};
