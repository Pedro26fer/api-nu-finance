import { Request,Response } from "express";
import { AppError, handleError } from "../../error/appError";
import updateAccountService from "../../services/accounts/updateAccount.service";


const updateAccountController = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const data = req.body
        await updateAccountService(id, data)
        return res.status(204).json()
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
    
}

export default updateAccountController
