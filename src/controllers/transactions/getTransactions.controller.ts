import { Request, Response } from "express";
import getaTransactionsService from "../../services/transactions/getTransactions.service";
import { AppError, handleError } from "../../error/appError";

const getTransactionsController = async (req: Request, res: Response) => {
  try {
    const { userEmail } = req;
    const transactions = await getaTransactionsService(userEmail);
    return res.json(transactions);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
};

export default getTransactionsController;
