import express from "express";
import { postUser } from "./controllers/users.controllers";
import {
  postApplication,
  getApplicationsByUserId,
} from "./controllers/applications.controllers";
import { authenticate, authenticationError } from "aws-cognito-express";
import { checkCognitoObjectExists } from "./custommiddleware/checkCognitoObjectExists";
import cors from "cors";
import dbPool from "./connection";

declare global {
  namespace Express {
    interface Request {
      cognito?: {
        sub: string;
        iss: string;
        client_id: string;
        origin_jti: string;
        event_id: string;
        token_use: string;
        scope: string;
        auth_time: number;
        exp: number;
        iat: number;
        jti: string;
        username: string;
      };
    }
  }
}

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.options("/applications", cors());
const authConfig = {
  region: "us-east-1",
  userPoolId: "us-east-1_kvmvO3mcG",
  tokenUse: ["id", "access"],
  audience: ["33bt19dahld5eq9b8t9qavno6o"],
};
app.use(authenticate(authConfig));

app.use(checkCognitoObjectExists);

app.get("/applications", getApplicationsByUserId);

app.post("/applications", postApplication);

app.post("/users", postUser); 

app.use(authenticationError());

export default app;
