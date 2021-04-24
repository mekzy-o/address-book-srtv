import express from 'express';
import { AuthController } from '../controllers';
import authValidation from '../middlewares/authValidator';

const router = express.Router();

router.post('/signup', authValidation.signup, AuthController.signup);
router.post('/signin', authValidation.signin, AuthController.signin);

export default router;
