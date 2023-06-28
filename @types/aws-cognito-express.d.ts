declare module "aws-cognito-express" {
  interface AuthenticateOptions {
    region: string;
    userPoolId: string;
    tokenUse: string[];
    audience: string[];
  }

  function authenticate(options: AuthenticateOptions): any;

  function authenticationError(): any;
}
