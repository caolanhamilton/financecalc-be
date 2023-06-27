import { Request, Response } from "express";
import { fetchApplicationsByUserId, addUser } from "../models/user.models";

export async function getApplicationsByUserId(req: Request, res: Response) {
  try {
    const applications = await fetchApplicationsByUserId(req.params.uid);
    res.status(200).send({ applications });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the data.",
    });
  }
}

export async function postUser(req: Request, res: Response) {
  try {
    await addUser(req.body);
    res.status(204);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the data.",
    });
  }
}
