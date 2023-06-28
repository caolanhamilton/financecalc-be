import { Request, Response, NextFunction } from "express";
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
export const checkCognitoObjectExists = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.path === "/users" && req.method == "POST") next();
  if (!req.cognito || !req.cognito.sub) {
    return res.status(401).send({
      message: "Unauthorized",
    });
  }
  next();
};
