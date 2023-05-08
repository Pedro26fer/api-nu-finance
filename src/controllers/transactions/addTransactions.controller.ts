import { Request, Response } from "express";
import { AppError } from "../../error/appError";
import { handleError } from "../../error/appError";
import addTransactionService from "../../services/transactions/addTransactions.service";

const addTransactionController = async (req: Request, res: Response) => {
    try {
        const userEmail = req.userEmail
        const {description, value, type} = req.body
        const {account} = req.params
        const newTransaction = await addTransactionService({description,type,value,account,userEmail})
        return res.status(201).json(newTransaction)
    } catch (error) {
        if( error instanceof AppError){
            handleError(error, res)
        }
    }
}

export default addTransactionController