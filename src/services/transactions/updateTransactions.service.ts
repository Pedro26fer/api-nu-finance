import AppDataSource from "../../data-source";
import { Transactions } from "../../entities/transactions.entity";
import { AppError } from "../../error/appError";
import { IUpdateTransactions } from "../../interfaces/transaction";

const updateTransactionService = async (id: string, data: IUpdateTransactions) => {

    const transactionRepository = AppDataSource.getRepository(Transactions)


    const transactionToUpdate = await transactionRepository.findOne({
        where: {
            id: id
        }
    })

    if(!transactionToUpdate){
        throw new AppError(404, "Transaction not found")
    }

    if(data.id){
        throw new AppError(401, "You dont have permission to do this action")
    }

    await transactionRepository.update(transactionToUpdate.id, data)

}

export default updateTransactionService