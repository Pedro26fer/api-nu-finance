import { Request, Response } from "express";
import registerAccountService from "../../services/accounts/registerAccount.service";
import { AppError } from "../../error/appError";
import { handleError } from "../../error/appError";

const registerAccountController = async (req: Request, res: Response) => {
  try {
    const userEmail = req.userEmail;
    const { name, number } = req.body;
    const newAccount = await registerAccountService({
      name,
      number,
      userEmail,
    });
    return res.status(201).json(newAccount);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default registerAccountController;
