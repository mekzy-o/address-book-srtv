import express from 'express';
import { FirebaseController } from '../controllers';
import authValidation from '../middlewares/authValidator';
import createContactValidation from '../middlewares/createContactValidator';

const router = express.Router();

router.post('/contacts', authValidation.authenticate, createContactValidation.contactDetails, FirebaseController.createContact);

export default router;
