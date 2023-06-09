import signUpUserController from "../controllers/user/signupUser.controller";
import { Express } from "express";
import { isLoggedMiddleware } from "../middlewares/isLogged.midleware";
import getUserController from "../controllers/user/getUsers.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";


export const userRoutes = (app: Express) => {
    app.post("/signup", signUpUserController),
    app.get("/profile", isLoggedMiddleware, getUserController),
    app.delete("/deleteUser",  isLoggedMiddleware, deleteUserController),
    app.patch("/edit/:id", isLoggedMiddleware, updateUserController)
}