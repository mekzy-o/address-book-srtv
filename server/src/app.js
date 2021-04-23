import express from 'express';
import Debug from 'debug';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes';
import ErrorHandler from './middleware/errorHandler';
// import Seed from './db/seed';

const debug = Debug('dev');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors('*'));
app.use(morgan(':method :url :status :response-time ms'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  process.env.HOST = req.get('host');
  next();
});

app.get('/', (req, res) => res.status(301).redirect('/api'));
app.use('/api', router);

app.use('*', (req, res) => {
  res.status(404).json({ status: 404, error: 'Resource not available' });
});

// default error handler
app.use(ErrorHandler.sendError);

export default app.listen(port, async () => {
  debug(`Server started on port ${port}`);
  // await Seed();
});
