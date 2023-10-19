import { client } from "../database";
import { UserCreate, User, UserResult, UserRead, UserCreateReturn } from "../interfaces/user.interface";
import format from "pg-format";
import { hashSync } from "bcryptjs";
import { userCreateReturnSchema, userReadSchema } from "../schemas/user.schema";

export const createUserService = async (data: UserCreate): Promise<UserCreateReturn> => {

    data.password = hashSync(data.password, 10);

    const queryFormat: string = format (
        `INSERT INTO "users" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(data),
        Object.values(data)
    )

    const queryResult : UserResult = await client.query(queryFormat);
    const user : User = queryResult.rows[0]

    return userCreateReturnSchema.parse(user);
};

export const readUserService = async (): Promise<UserRead> => {
    
    const queryResult : UserResult = await client.query(`SELECT * FROM "users";`);

    return userReadSchema.parse(queryResult.rows);

}