import { region, Request, Response } from "firebase-functions";
import * as express from 'express';

// When serve localhost, access below
// http://localhost:5000/githubactionsexamples/asia-northeast1/helloWorld
// and generate new functions[helloWorld]
export const helloWorld = region("asia-northeast1").https.onRequest((request: Request, response: Response) => {
  response.send("Hello from Firebase!!!");
});

const app = express();

// express api sample
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

// When serve localhost, access below
// http://localhost:5000/githubactionsexamples/asia-northeast1/api
// and generate new functions[api]
export const api = region('asia-northeast1').https.onRequest(app);