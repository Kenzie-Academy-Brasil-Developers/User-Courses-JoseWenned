import { Router } from "express";
import { sessionLoginController } from "../controllers/session.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { sessionSchema } from "../schemas/session.schema";

export const sessionRoutes : Router = Router();

sessionRoutes.post("/", validateBody(sessionSchema), sessionLoginController);
