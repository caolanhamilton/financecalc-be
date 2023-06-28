import dbPool from "../connection";

export async function fetchApplicationsByUserId(sub: string) {
  try {
    const res = await dbPool.query(
      "SELECT * FROM public.applications WHERE user_id = $1",
      [sub]
    );
    return res.rows;
  } catch (error) {
    console.log("Error fetching applications from DB:", error);
    throw new Error("Error fetching applications from DB");
  }
}

export async function addUserApplication(
  uid: string,
  application: {
    treatment_cost: number;
    deposit: number;
    loan_amount: number;
    monthly_payments: number;
    payment_length: number;
    apr: number;
  }
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
    console.log("Inserted application:", res);
  } catch (error) {
    console.log("Error adding application to DB:", error);
    throw new Error("Error adding application to DB");
  }
}
