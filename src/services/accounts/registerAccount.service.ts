import { Accounts } from "../../entities/accounts.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../error/appError";
import { IAccountRegister } from "../../interfaces/accounts";
import { User } from "../../entities/user.entity";


const registerAccountService = async ({name,number,userEmail}: IAccountRegister) => {

    const accountsRepository = AppDataSource.getRepository(Accounts)
    const userRepository = AppDataSource.getRepository(User)

    const userOwner = await userRepository.findOne({where: {email: userEmail}})

    if(!userOwner){
        throw new AppError(404, "email invalid")
    }


    const accountAlreadyRegister = await accountsRepository.findOne({where: {number}})
     
    if (accountAlreadyRegister){
        throw new AppError(403, "This account was already registering")
    }

    await accountsRepository.save({
        name,
        number,
        user: userOwner
    })

    const newAccount = await accountsRepository.find({
        select:{
            id:true,
            name:true,
            number:true ,
            user: {
                name:true,
                email:true,
            }           
        },
        relations:{
            user:true
        },
        where:{
            number: number
        }
        

    })

    return newAccount
}

export default registerAccountService