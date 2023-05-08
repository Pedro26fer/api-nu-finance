import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../error/appError";

const getUsersService = async (userEmail: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const userRetrived = await userRepository.findOne({
        select:{
            id:true,
            name:true,
            email: true,
            createdAt: true,
        },
        
        where:{
            email: userEmail
        }
    })

    if(!userRetrived){
        throw new AppError(404,"Users not found")
    }
    return userRetrived
}

export default getUsersService