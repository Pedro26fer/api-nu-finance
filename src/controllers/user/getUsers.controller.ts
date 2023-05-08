import { Request,Response } from "express";
import getUserService from "../../services/user/getUser.service";
import { AppError } from "../../error/appError";
import { handleError } from "../../error/appError";

const getUserController = async (req: Request, res: Response) => {
    try {
        const {userEmail} = req
        const user = await getUserService(userEmail)
        return res.json(user)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}

export default getUserController