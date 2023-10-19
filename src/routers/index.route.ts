import { Router } from "express";
import { userRoutes } from "./user.route";
import { sessionRoutes } from "./session.router";
import { coursesRoutes } from "./courses.route";

export const routes : Router = Router();

routes.use("/users", userRoutes);

routes.use("/login", sessionRoutes);

routes.use("/courses", coursesRoutes);