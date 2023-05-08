import { Request, Response } from "express";
import { handleError } from "../../error/appError";
import signInUserService from "../../services/sessions/loginUser.service";
import { AppError } from "../../error/appError";

const signInUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await signInUserService({ email, password });
    return res.status(200).json({token});
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default signInUserController;
