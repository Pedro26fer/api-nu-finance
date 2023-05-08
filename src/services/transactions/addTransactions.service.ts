import AppDataSource from "../../data-source";
import { AppError } from "../../error/appError";
import { User } from "../../entities/user.entity";
import { Transactions } from "../../entities/transactions.entity";
import { IAddTransactin } from "../../interfaces/transaction";
import { Accounts } from "../../entities/accounts.entity";

const addTransactionService = async ({description,type,value,account,userEmail}: IAddTransactin) => {
    const userRepository = AppDataSource.getRepository(User)
    const transactionRepository = AppDataSource.getRepository(Transactions)
    const accountsRepository = AppDataSource.getRepository(Accounts)

    const userAvaible = await userRepository.findOne({where:{email: userEmail}})
    if(!userAvaible){
        throw new AppError(404,"User unavaible")
    }
    
    const accountAvaible = await accountsRepository.findOne({where: {id: account}})
    if(!accountAvaible){
        throw new AppError(404,"Account unavaible")
    }

    const newTransaction = await transactionRepository.save({
        description,
        type,
        value,
        account: accountAvaible,
        user: userAvaible
    })
    

    return newTransaction    

}

export default addTransactionService