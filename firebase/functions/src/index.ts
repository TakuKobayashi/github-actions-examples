import { region, Request, Response } from "firebase-functions";

// When serve localhost, access below
// http://localhost:5000/githubactionsexamples/asia-northeast1/helloWorld
export const helloWorld = region("asia-northeast1").https.onRequest((request: Request, response: Response) => {
  response.send("Hello from Firebase!!!");
});
