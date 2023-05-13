import AppDataSource from "../../data-source";
import { Accounts } from "../../entities/accounts.entity";
import { AppError } from "../../error/appError";
import { IAccountUpdate } from "../../interfaces/accounts";


const updateAccountService = async (id: string, data: IAccountUpdate) => {
    const accountRepository = AppDataSource.getRepository(Accounts)

    const accountToUpdate = await accountRepository.findOne({where: {
        id: id
    }})

    if(!accountToUpdate){
        throw new AppError(404, "Account not found")
    }
    
    if(data.id){
        throw new AppError(401, "You dont have permission to do this action")
    }

    await accountRepository.update(accountToUpdate.id, data)

    return true
}

export default updateAccountService