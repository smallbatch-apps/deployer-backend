import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { mongoConnect } from "./models";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, async () => {
  await mongoConnect();

  console.log(
    `⚡️[server]: Server thing is running at https://localhost:${port}`
  );
});
