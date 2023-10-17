import { Router } from "express";
import { userRoutes } from "./user.route";
import { sessionRoutes } from "./session.router";

export const routes : Router = Router();

routes.use("/users", userRoutes);
routes.use("/login", sessionRoutes);