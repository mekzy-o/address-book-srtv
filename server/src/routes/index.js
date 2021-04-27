import express from 'express';
import auth from './auth';
import firebaseRoute from './firebase';

const router = express.Router();

// Home
router.get('/', (req, res) => res.status(200).json({
  status: res.statusCode,
  message: 'Welcome to Address Book API Server',
}));

router.use('/auth', auth);
router.use('/firebase', firebaseRoute);

export default router;
