import express, { Request, Response } from "express";
import { getApplicationsByUserId } from "./controllers/user.controllers";
import { authenticate, authenticationError } from "aws-cognito-express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  authenticate({
    region: "us-east-1",
    userPoolId: "us-east-1_kvmvO3mcG",
    tokenUse: ["id", "access"],
    audience: ["33bt19dahld5eq9b8t9qavno6o"],
  })
);

app.get("/users/$uid/applications", (req: Request, res: Response) => {
  res.send("hello");
});

app.post("applications", (req: Request, res: Response) => {
  res.send("hello");
});

app.use(authenticationError());

export default app;
