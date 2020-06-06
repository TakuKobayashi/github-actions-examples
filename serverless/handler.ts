import { APIGatewayProxyHandler, APIGatewayEvent, Context } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event: APIGatewayEvent, _context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}

import * as awsServerlessExpress from 'aws-serverless-express';
import * as express from 'express';

const app = express();
const server = awsServerlessExpress.createServer(app);

app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

export const api: APIGatewayProxyHandler = (event: APIGatewayEvent, context: Context) => {
  awsServerlessExpress.proxy(server, event, context);
};