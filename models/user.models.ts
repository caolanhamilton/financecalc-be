import { type } from "os";
import dbPool from "../connection";

type User = {
  sub: string;
  first_name: string;
  second_name: string;
  email: string;
};

export async function addUser(sub: string, user: User) {
  try {
    const res = await dbPool.query(
      "INSERT INTO users(uid, first_name, second_name, email) VALUES($1, $2, $3, $4)",
      [sub, user.first_name, user.second_name, user.email]
    );
  } catch (error) {
    console.log(error);
    throw new Error("Error adding user to DB");
  }
}
