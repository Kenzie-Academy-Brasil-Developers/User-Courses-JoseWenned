import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyPermission } from "../middlewares/verifyPermission.middleware";
import { courseCreateController } from "../controllers/course.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { courseCreateSchema } from "../schemas/course.schema";

export const coursesRoutes : Router = Router();

coursesRoutes.post("/", verifyToken, verifyPermission, validateBody(courseCreateSchema), courseCreateController);

coursesRoutes.get("/",);

coursesRoutes.post("/:courseId/users/:userId",);

coursesRoutes.delete("/:courseId/users/:userId",);

coursesRoutes.get("/:id/users",);
