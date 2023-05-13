import { Request, Response } from "express";
import { AppError, handleError } from "../../error/appError";
import updateTransactionService from "../../services/transactions/updateTransactions.service";

const updateTransactionController = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const data = req.body
        await updateTransactionService(id, data)
        return res.status(204).json()
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}

export default updateTransactionController