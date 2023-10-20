import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyPermission } from "../middlewares/verifyPermission.middleware";
import { courseAddController, courseCreateController, courseDeleteController, courseReadController, courseReadIdController } from "../controllers/course.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { courseCreateSchema } from "../schemas/course.schema";
import { verifyCourseId } from "../middlewares/verifyCourseId.middleware";
import { verifyUserId } from "../middlewares/verifyUserId.middleware";

export const coursesRoutes : Router = Router();

coursesRoutes.post("/", verifyToken, verifyPermission, validateBody(courseCreateSchema), courseCreateController);

coursesRoutes.get("/", courseReadController);

coursesRoutes.post("/:courseId/users/:userId", verifyToken, verifyPermission, verifyUserId, verifyCourseId, courseAddController);

coursesRoutes.delete("/:courseId/users/:userId", verifyToken, verifyPermission, verifyUserId, verifyCourseId, courseDeleteController);

coursesRoutes.get("/:id/users", verifyToken, verifyPermission, courseReadIdController);
