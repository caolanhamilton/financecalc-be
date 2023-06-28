export type User = {
  sub: string;
  first_name: string;
  second_name: string;
  email: string;
};

export type Application = {
  treatment_cost: number;
  deposit: number;
  loan_amount: number;
  monthly_payments: number;
  payment_length: number;
  apr: number;
};

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
