import { Express } from "express";
import addTransactionController from "../controllers/transactions/addTransactions.controller";
import { isLoggedMiddleware } from "../middlewares/isLogged.midleware";
import getTransactionsController from "../controllers/transactions/getTransactions.controller";
import deleteTransactionsController from "../controllers/transactions/deleteTransactions.controller";


export const transactionsRoute = (app: Express) => {
    app.post("/addTransaction/:account", isLoggedMiddleware, addTransactionController)
    app.get("/allTransactions", isLoggedMiddleware, getTransactionsController)
    app.delete("/deleteTransactions/:id", isLoggedMiddleware, deleteTransactionsController)
}