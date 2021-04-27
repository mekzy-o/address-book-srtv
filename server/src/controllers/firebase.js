import { FirebaseService, AuthService } from '../services';
import Response from '../helpers/response';
// import { validateToken } from '../services/'
import { AuthenticationError } from '../helpers/error';

/**
  * @function createContact
  * @description creates contact details to firebase service
  * @param {object} req - The Request Object
  * @param {object} res - The Response Object
  * @param {object} next - The next function
  * @returns {object} JSON API Response
  */
export const createContact = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = await AuthService.validateToken(token);
    if (decodedToken.error) return next(new AuthenticationError(decodedToken.error));
    const data = await FirebaseService.createContact(decodedToken.id, req.body);
    const response = new Response(data, 201);
    return res.status(201).json({ ...response, message: 'Contact details added to firebase database successfully' });
  } catch (error) {
    next(error);
  }
};
