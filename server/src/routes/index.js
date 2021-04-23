import express from 'express';

const router = express.Router();

// Home
router.get('/', (req, res) => res.status(200).json({
  status: res.statusCode,
  message: 'Welcome to Address Book API Server',
}));

export default router;
