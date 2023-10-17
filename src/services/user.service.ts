import { client } from "../database";
import { userCreate, User, userResult } from "../interfaces/userCreate.interface";
import format from "pg-format";
import { hashSync } from "bcryptjs";
import { userSchema } from "../schemas/user.schema";

export const createUserService = async (data: userCreate): Promise<User> => {

    data.password = hashSync(data.password, 10);

    const queryFormat: string = format (
        `INSERT INTO "users" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(data),
        Object.values(data)
    )

    const queryResult : userResult = await client.query(queryFormat);
    const user : User = queryResult.rows[0]

    return userSchema.parse(user);
};
