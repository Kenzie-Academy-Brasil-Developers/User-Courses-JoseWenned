import { sign } from "jsonwebtoken";
import { client } from "../database";
import AppError from "../errors/App.error";
import { session, sessionReturn } from "../interfaces/session.interface";
import { User, userResult } from "../interfaces/user.interface";

export const loginService = async (data: session): Promise<sessionReturn> => {

    const query : userResult = await client.query(
        `SELECT * FROM "users" WHERE "email" = $1;`,
        [data.email]
    );

    if(query.rowCount === 0){
        throw new AppError("Wrong email/password", 401);
    };

    const user : User = query.rows[0];

    if(user.password !== data.password){
        throw new AppError("Wrong email/password", 401);
    }

    const token : string = sign(
        {email : user.email, admin: user.admin},
        process.env.SECRET_KEY!,
        {subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN!}
    );

    return {token}
}