import AppDataSource from "../../data-source";
import { Accounts } from "../../entities/accounts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../error/appError";

const getAccountService = async (userEmail : string) => {

    const accountRepository = AppDataSource.getRepository(Accounts)
    const userRepository = AppDataSource.getRepository(User)
    const userOwner = await userRepository.findOne({where: {email: userEmail}})

  
    if(!userOwner){
        throw new AppError(404,"User not found")
    }

    const userOnwerId = userOwner.id

    const accounts = await accountRepository.find({
        select:{
            id:true,
            name:true,
            number: true,
            transactions: true
        },
        relations:{
            transactions:true,
        },
        where:{
            user: {
                id: userOnwerId
            }
        }
        
    })

    return accounts
}

export default getAccountService