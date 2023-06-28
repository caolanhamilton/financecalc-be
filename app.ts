import express from "express";
import { postUser } from "./controllers/users.controllers";
import {
  postApplication,
  getApplicationsByUserId,
} from "./controllers/applications.controllers";
import { authenticate, authenticationError } from "aws-cognito-express";
import { checkCognitoObjectExists } from "./custommiddleware/checkCognitoObjectExists";
import cors from "cors";
import { authConfig } from "./authConfig";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.options("/applications", cors());

app.use(authenticate(authConfig));

app.use(checkCognitoObjectExists);

app.get("/applications", getApplicationsByUserId);

app.post("/applications", postApplication);

app.post("/users", postUser);

app.use(authenticationError());

export default app;
