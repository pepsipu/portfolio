import express from 'express';
import chalk from 'chalk';

import './config/env';
import { expressLogger, logger } from './config/winston';
import router from './routes/router';

const app: express.Application = express();
const port: number = +(process.env.PORT || 3000);

app.use(express.json());
app.use((req, res, next) => {
  // I ain't no pussy
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
});
app.use(expressLogger);
app.use('/api', router);

app.listen(port, () => {
  logger.info(`Express server has started listening on port ${chalk.red(port)}.`);
});
