import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";
import { User } from "../interfaces/user.interface";

export const verifyPermission = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const {admin} = res.locals.decoded

    if(!admin){
        throw new AppError("Insufficient permission", 403);
    };

    return next();
};