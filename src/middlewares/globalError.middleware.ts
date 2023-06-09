import { Request, Response, NextFunction} from "express";
import { AppError } from "../error/appError";


export const globalErrorMiddleware = (err: any, req: Request, res: Response, _: NextFunction) => {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            status: "error",
            statusCode: err.statusCode,
            message: err.message
        })
    }

    return res.status(500).json({
        status: "Error",
        message: "Internal error"
    })
}