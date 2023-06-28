import dbPool from "../connection";
import { User } from "../types/types";

export async function addUser(sub: string, user: User) {
  try {
    const existingUserCheck = await dbPool.query(
      "SELECT * FROM users WHERE uid = $1",
      [sub]
    );

    if (existingUserCheck.rows.length > 0) {
      return;
    }

    const insertUserQuery = await dbPool.query(
      "INSERT INTO users(uid, first_name, second_name, email) VALUES($1, $2, $3, $4)",
      [sub, user.first_name, user.second_name, user.email]
    );
  } catch (error) {
    console.log(error);
    throw new Error("Error adding user to DB");
  }
}
