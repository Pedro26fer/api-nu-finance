import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

export const isLoggedMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        jwt.verify(token as string, process.env.SECRET_KEY as string, (err: any, decoded: any) =>{
            req.userEmail = decoded.email
            next()            
        })
    } catch (error) {
        if(error instanceof Error){
            res.status(401).json({"error": "invalid token"})
        }
    }
}

