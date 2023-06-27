import dbPool from "../connection";

export async function fetchApplicationsByUserId(uid: string) {
  try {
    const res = await dbPool.query(
      "SELECT * FROM applications WHERE user_id = $1",
      [uid]
    );
    return res.rows;
  } catch {
    throw new Error("Error fetching applications from DB");
  }
}

interface User {
  uid: string;
  first_name: string;
  second_name: string;
  email: string;
}

export async function addUser(user: User) {
  try {
      await dbPool.query(
          "INSERT INTO users(uid, first_name, second_name, email) VALUES($1, $2, $3, $4)",
          [user.uid, user.first_name, user.second_name, user.email]
      );
  } catch {
    throw new Error("Error adding user to DB");
  }
}
