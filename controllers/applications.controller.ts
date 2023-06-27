import { Request, Response } from "express";
import { addUserApplication } from "../models/applications.models";

export async function postUserApplication(req: Request, res: Response) {
  try {
    await addUserApplication(
      res.locals.uid,
      req.body.application
    );
    res.status(204)
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the data.",
    });
  }
}
