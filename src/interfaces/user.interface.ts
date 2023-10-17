import { QueryResult } from "pg";
import { userCreateSchema, userCreateUpdate, userSchema } from "../schemas/user.schema";
export { z } from "zod";

export type User = Zod.infer<typeof userSchema>;

export type userCreate = Zod.infer<typeof userCreateSchema>;
export type userRead = Array<User>;
export type userCreateUpdate = Zod.infer<typeof userCreateUpdate>;
export type userResult = QueryResult<User>;