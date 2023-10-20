import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema } from "../schemas/user.schema";
import { createUserController, readUserController } from "../controllers/user.controller";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyPermission } from "../middlewares/verifyPermission.middleware";
import { courseReadIdController } from "../controllers/course.controller";
import { verifyCourseExist } from "../middlewares/verifyCourseExist.middleware";

export const userRoutes : Router = Router();

userRoutes.post("/", validateBody(userCreateSchema), verifyEmail, createUserController); // OK

userRoutes.get("/", verifyToken, verifyPermission, readUserController); //OK

userRoutes.get("/:id/courses", verifyToken, verifyPermission, verifyCourseExist, courseReadIdController);