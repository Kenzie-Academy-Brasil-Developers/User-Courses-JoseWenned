import { NextFunction } from "connect";
import { Request, Response } from "express";
import { userResult } from "../interfaces/user.interface";
import { client } from "../database";
import AppError from "../errors/App.error";

export const verifyEmail = async (req:Request, res: Response, next:NextFunction) : Promise<void> => {
    const { email } = req.body;

    if(!email) {
        return next();
    };

    const query : string = `SELECT * FROM "users" WHERE "email" = $1;`;
    const queryResult: userResult = await client.query(query, [email]);

    if(queryResult.rowCount){
        throw new AppError("Email already registered", 409);
    };

    return next();
};