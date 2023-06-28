import { Request, Response } from "express";
import { addUser } from "../models/user.models";

export async function postUser(req: Request, res: Response) {
  try {
    await addUser(req.body.user); 
    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the data.",
    });
  }
}
