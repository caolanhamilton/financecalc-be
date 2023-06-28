import { Request, Response } from "express";
import { addUserApplication, fetchApplicationsByUserId } from "../models/applications.models";

export async function getApplicationsByUserId(req: Request, res: Response) {
  console.log(req)
  try {
    const applications = await fetchApplicationsByUserId(req.cognito!.sub);
    res.status(200).send({ applications });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching the data.",
    });
  }
}

export async function postApplication(req: Request, res: Response) {
  console.log(req.body, req.cognito!.sub)
  try {
    await addUserApplication(
      req.cognito!.sub,
      req.body.application
    );
    res.status(204).send()
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the data.",
    });
  }
}
