import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema } from "../schemas/user.schema";
import { createUserController, readUserController } from "../controllers/user.controller";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";

export const userRoutes : Router = Router();

userRoutes.post("/", validateBody(userCreateSchema), verifyEmail, createUserController);
userRoutes.get("/", readUserController);
userRoutes.get("/:id/courses",validateBody(userCreateSchema), verifyEmail);