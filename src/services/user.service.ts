import { client } from "../database";
import { userCreate, User, userResult } from "../interfaces/userCreate.interface";
import format from "pg-format";
import { hashSync } from "bcryptjs";

export const createUserService = async (data: userCreate): Promise<User> => {

    data.password = hashSync(data.password, 10);

    const queryFormat: string = format (
        `INSERT INTO "users" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(data),
        Object.values(data)
    )

    const queryResult : userResult = await client.query(queryFormat);

    return queryResult.rows[0];
} 