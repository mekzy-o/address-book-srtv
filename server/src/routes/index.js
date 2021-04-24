import express from 'express';
import auth from './auth';

const router = express.Router();

// Home
router.get('/', (req, res) => res.status(200).json({
  status: res.statusCode,
  message: 'Welcome to Address Book API Server',
}));

router.use('/auth', auth);

export default router;
