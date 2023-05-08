import { Request, Response } from "express";
import deleteAccountService from "../../services/accounts/deleteAccount.service";
import { AppError, handleError } from "../../error/appError";

const deleteAccountController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteAccountService(id);
    return res.json("message: the account was deleted");
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default deleteAccountController;
