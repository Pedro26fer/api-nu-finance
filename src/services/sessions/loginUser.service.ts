import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import { IUserSignIn } from "../../interfaces/user";
import { AppError } from "../../error/appError";
import jwt from "jsonwebtoken";

const signInUserService = async ({ email, password }: IUserSignIn) => {
  const userRepository = AppDataSource.getRepository(User);

  const emailRegistered = await userRepository.findOne({ where: { email } });

  if (!emailRegistered) {
    throw new AppError(404, "email/password invalid");
  }

  const acceptPasswoord = bcrypt.compareSync(
    password,
    emailRegistered.password
  );

  if (!acceptPasswoord) {
    throw new AppError(404, "email/password invalid");
  }

  const token = jwt.sign({ email }, String(process.env.SECRET_KEY), {
    expiresIn: "5h",
  });

  return token;
};

export default signInUserService;
