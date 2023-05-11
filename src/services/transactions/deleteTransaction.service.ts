import AppDataSource from "../../data-source";
import { AppError } from "../../error/appError";
import { Transactions } from "../../entities/transactions.entity";


const deleteTransactionsService = async (id: string) => {
    const transactionsRepository = AppDataSource.getRepository(Transactions)

    const transactionDeleted = await transactionsRepository.findOne({where:{
        id: id
    }})

    if(!transactionDeleted){
        throw new AppError(404,"Transaction not found")
    }

    await transactionsRepository.delete(transactionDeleted.id)

    return true

}

export default deleteTransactionsService
