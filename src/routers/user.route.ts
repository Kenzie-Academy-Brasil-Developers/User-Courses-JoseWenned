import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema } from "../schemas/user.schema";

export const userRoutes : Router = Router();

userRoutes.post("/", validateBody(userCreateSchema),);
userRoutes.get("/",);
userRoutes.get("/:id/courses",validateBody(userCreateSchema),);