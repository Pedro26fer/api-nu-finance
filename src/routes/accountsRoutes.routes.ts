import { Express } from "express";
import registerAccountController from "../controllers/accounts/registeAccount.controller";
import { isLoggedMiddleware } from "../middlewares/isLogged.midleware";
import getAccountsController from "../controllers/accounts/getAcounts.controller";
import deleteAccountController from "../controllers/accounts/deleteAccount.controller";

export const accountsRoutes = (app: Express) => {
    app.post("/addAccount", isLoggedMiddleware, registerAccountController),
    app.get("/accounts", isLoggedMiddleware, getAccountsController),
    app.delete("/deleteAccount/:id", isLoggedMiddleware, deleteAccountController)
}
