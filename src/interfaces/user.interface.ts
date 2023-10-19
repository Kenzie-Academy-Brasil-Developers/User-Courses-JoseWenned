import { QueryResult } from "pg";
import { userCreateReturnSchema, userCreateSchema, userCreateUpdate, userReadSchema, userSchema } from "../schemas/user.schema";
export { z } from "zod";

export type User = Zod.infer<typeof userSchema>;

export type UserCreate = Zod.infer<typeof userCreateSchema>;
export type UserCreateReturn = Zod.infer<typeof userCreateReturnSchema>
export type UserRead = Zod.infer<typeof userReadSchema>;
export type UserCreateUpdate = Zod.infer<typeof userCreateUpdate>;
export type UserResult = QueryResult<User>;