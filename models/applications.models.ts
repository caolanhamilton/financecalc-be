import dbPool from "../connection";

export async function addUserApplication(
  uid: string,
  application: { treatmentCost: number; deposit: number; apr: number }
) {
  try {
    const res = await dbPool.query(
      "INSERT INTO applications(treatment_cost, deposit, apr, user_id) VALUES($1, $2, $3, $4)",
      [application.treatmentCost, application.deposit, application.apr, uid]
    );
  } catch {
    throw new Error("Error adding application to DB");
  }
}
