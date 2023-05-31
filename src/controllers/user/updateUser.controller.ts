import { Request, Response } from "express";
import updateUserService from "../../services/user/updateUser.service";
import { AppError, handleError } from "../../error/appError";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await updateUserService(id, data);
    return res.status(204).json();
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default updateUserController;
