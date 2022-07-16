import serverlessExpress from '@vendia/serverless-express';
import express from 'express';
import bodyParser from 'body-parser';
import { githubRouter } from './routes/github';

const app = express();

app.use(bodyParser.text({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/github', githubRouter);

app.get('/test', (req, res, next) => {
  res.status(200).json({
    message: 'Hello from root!',
  });
});

export const handler = serverlessExpress({ app });
