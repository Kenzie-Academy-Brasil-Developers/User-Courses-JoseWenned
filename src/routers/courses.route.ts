import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyPermission } from "../middlewares/verifyPermission.middleware";
import { courseAddController, courseCreateController, courseDeleteController, courseReadIdController } from "../controllers/course.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { courseCreateSchema } from "../schemas/course.schema";
import { verifyCourseId } from "../middlewares/verifyCourseId.middleware";
import { verifyUserId } from "../middlewares/verifyUserId.middleware";
import { courseReadService } from "../services/course.service";

export const coursesRoutes : Router = Router();

coursesRoutes.post("/", verifyToken, verifyPermission, validateBody(courseCreateSchema), courseCreateController);

coursesRoutes.get("/", courseReadService);

coursesRoutes.post("/:courseId/users/:userId", verifyToken, verifyPermission, verifyUserId, verifyCourseId, courseAddController);

coursesRoutes.delete("/:courseId/users/:userId", verifyPermission, verifyUserId, verifyCourseId, courseDeleteController);

coursesRoutes.get("/:id/users", verifyToken, verifyPermission, courseReadIdController);
