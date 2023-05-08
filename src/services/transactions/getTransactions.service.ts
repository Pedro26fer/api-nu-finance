import AppDataSource from "../../data-source";
import { AppError } from "../../error/appError";
import { Transactions } from "../../entities/transactions.entity";
import { User } from "../../entities/user.entity";

const getaTransactionsService = async (userEmail: string) => {
  const transactionsRepository = AppDataSource.getRepository(Transactions);
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({where:{email: userEmail}})
  if(!user){
    throw new AppError(403,"Not found the user")
  }

  
  const transactions = await transactionsRepository.find({
    select: {
      id: true,
      description: true,
      type: true,
      value: true,
      account:{
        name:true,
        number:true,
        transactions:false
      }
    },
    relations:{
      account:true
    },
    where: {
      user: {
        id: user.id,
      },
    },
  });

  if (!transactions) {
    throw new AppError(404, "no transactions");
  }

  return transactions;
};

export default getaTransactionsService;
