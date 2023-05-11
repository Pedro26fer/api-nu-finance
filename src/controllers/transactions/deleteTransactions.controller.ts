import { Request,Response } from "express";
import { AppError, handleError } from "../../error/appError";
import deleteTransactionsService from "../../services/transactions/deleteTransaction.service";

const deleteTransactionsController = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        await deleteTransactionsService(id)
        return res.status(204).json()
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}

export default deleteTransactionsController