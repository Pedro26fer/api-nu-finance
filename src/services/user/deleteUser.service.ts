import AppDataSource from "../../data-source";
import { AppError } from "../../error/appError";
import { User } from "../../entities/user.entity";


const deleteUserService = async (userEmail: string) => {

    const userRepository = AppDataSource.getRepository(User)

    const userDeleted = await userRepository.findOne({where: {email: userEmail}})
    if(!userDeleted){
        throw new AppError(404, "User not found")
    }

    await userRepository.delete({id: userDeleted.id})

    return true

}

export default deleteUserService