import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from 'bcrypt';
import { IUserSignUp} from "../../interfaces/user";
import { AppError } from "../../error/appError";


const signUpUserService = async ({name,email,password} : IUserSignUp) => {

    const userRepository = AppDataSource.getRepository(User)

    const emailAlreadyExists = await userRepository.findOne({where: {email}})

    if(emailAlreadyExists){
        throw new AppError(403,"Email already registered")
    }
    
    const newUser = await userRepository.save({
        name,
        email,
        password: bcrypt.hashSync(password,10)
    })


    return newUser
}

export default signUpUserService