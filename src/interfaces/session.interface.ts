import { sessionSchema } from "../schemas/session.schema";
import { z } from "zod";

export type session = z.infer<typeof sessionSchema>;

export type sessionReturn = { token: string };