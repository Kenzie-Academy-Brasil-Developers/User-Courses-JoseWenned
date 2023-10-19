import { QueryResult } from "pg";
import { userCreateReturnSchema, userCreateSchema, userCreateUpdate, userReadSchema, userSchema } from "../schemas/user.schema";
import { z } from "zod";

export type User = z.infer<typeof userSchema>;

export type UserCreate = z.infer<typeof userCreateSchema>;
export type UserCreateReturn = z.infer<typeof userCreateReturnSchema>
export type UserRead = z.infer<typeof userReadSchema>;
export type UserCreateUpdate = z.infer<typeof userCreateUpdate>;
export type UserResult = QueryResult<User>;