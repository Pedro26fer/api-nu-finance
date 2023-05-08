import { Express } from "express";
import signInUserController from "../controllers/sessions/signInUser.controller";


export const sessionRoutes = (app: Express) => {
  app.post("/signin", signInUserController)
};
