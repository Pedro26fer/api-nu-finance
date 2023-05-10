import signUpUserService from "../../services/user/signupUser.service";
import { Request,Response } from "express";
import { AppError, handleError } from "../../error/appError";


const signUpUserController = async (req: Request, res: Response) => {

    try {
        const {name, email, password} = req.body

        const newUser = await signUpUserService({name, email, password})

        return res.status(201).json(newUser)
        
    } catch (error) {
        if(error instanceof AppError){
            handleError(error,res)
        }

        
    }

}

export default signUpUserController