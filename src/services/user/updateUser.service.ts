import { AppError } from "../../error/appError";
import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUserUpdated } from "../../interfaces/user";
import bcrypt from "bcrypt";

const updateUserService = async (id: string, data: IUserUpdated) => {
  const userRepository = AppDataSource.getRepository(User);
  const userToUptaded = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!userToUptaded) {
    throw new AppError(404, "User not found");
  }

  if(data.id){
    throw new AppError(401, "You dont have permission to do this action")
  }

  try {
    if (data.password) {
      data.password = bcrypt.hashSync(data.password, 10);
    }

    userToUptaded.updatedAt = new Date();

    await userRepository.update(userToUptaded.id, data);
  } catch (error) {
    throw new AppError(403, "Email is already being used");
  }

  return true;
};

export default updateUserService;
