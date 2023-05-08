import { Request, Response } from "express";
import { handleError } from "../../error/appError";
import { AppError } from "../../error/appError";
import getAccountService from "../../services/accounts/getAccounts.service";

const getAccountsController = async (req: Request, res: Response) => {
    try {
        const {userEmail} = req
        const accounts = await getAccountService(userEmail) 
        return res.json(accounts)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}

export default getAccountsController