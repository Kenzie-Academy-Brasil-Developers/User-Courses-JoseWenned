import "express-async-errors";
import express, { Application } from 'express';
import { routes } from "./routers/index.route";
import { handleErrors } from "./middlewares/handleError.middleware";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "./swagger.json"

const app: Application = express()
app.use(express.json())

app.use("/", routes);
app.use(handleErrors);
app.use("/api-documentation", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument))

export default app
