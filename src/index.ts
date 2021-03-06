import cors from 'cors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import logger from './config/logger';

const PORT = process.env.PORT || 8080;

const app = express();

//* Middilewares
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Hello World',
  });
});

app.listen(PORT, () => {
  logger.info(`Listening at http://localhost:${PORT}`);
});
