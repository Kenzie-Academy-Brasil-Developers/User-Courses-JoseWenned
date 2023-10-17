import { Router } from "express";
import { userRoutes } from "./user.route";
import { userCreateLoginroutes } from "./userLogin.router";

export const routes : Router = Router();

routes.use("/users", userRoutes);
routes.use("/login", userCreateLoginroutes);