import { region, Request, Response } from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = region("asia-northeast1").https.onRequest((request: Request, response: Response) => {
  response.send("Hello from Firebase!!!");
});
