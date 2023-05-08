import AppDataSource from "../../data-source";
import { AppError } from "../../error/appError";
import { Accounts } from "../../entities/accounts.entity";

const deleteAccountService = async (id: string) => {
  const accountRepository = AppDataSource.getRepository(Accounts);

  const accountToDelete = await accountRepository.findOne({where:{id:id}})


  if (!accountToDelete) {
    throw new AppError(404, "This account does not exists on the database");
  }
  
  await accountRepository.delete(accountToDelete.id);

  return "Account deleted with successfully";
};

export default deleteAccountService;
