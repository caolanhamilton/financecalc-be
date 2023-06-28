import dbPool from "../connection";
import { Application } from "../types/types";

export async function fetchApplicationsByUserId(sub: string) {
  try {
    const res = await dbPool.query(
      "SELECT * FROM public.applications WHERE user_id = $1",
      [sub]
    );
    return res.rows;
  } catch (error) {
    throw new Error("Error fetching applications from DB");
  }
}

export async function addUserApplication(
  uid: string,
  application: Application
) {
  try {
    const res = await dbPool.query(
      "INSERT INTO applications(treatment_cost, deposit, loan_amount, monthly_payments, payment_length, apr, user_id) VALUES($1, $2, $3, $4, $5, $6, $7)",
      [
        application.treatment_cost,
        application.deposit,
        application.loan_amount,
        application.monthly_payments,
        application.payment_length,
        application.apr,
        uid,
      ]
    );
  } catch (error) {
    throw new Error("Error adding application to DB");
  }
}
