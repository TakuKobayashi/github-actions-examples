import { APIGatewayProxyHandler, APIGatewayEvent, Context } from 'aws-lambda';

// When serverless offline start, access below
// http://localhost:3000/dev/hello
// add generate new AWS Lambda functions[hello]
export const hello: APIGatewayProxyHandler = async (event: APIGatewayEvent, _context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}

import serverlessExpress from '@vendia/serverless-express';
import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  res.json({ hello: 'world' });
});

// When serverless offline start, access below
// http://localhost:3000/dev/
// add generate new AWS Lambda functions[api]
export const api = serverlessExpress({ app });