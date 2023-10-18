import { Request, Response } from "express";
import { createUserService, readUserService } from "../services/user.service";
import { User, userRead } from "../interfaces/user.interface";

export const createUserController = async (req:Request, res:Response ): Promise<Response> => {
    const user : User = await createUserService(req.body);

    return res.status(201).json(user);
};

export const readUserController = async (req:Request, res:Response): Promise<Response> => {
    const user: userRead = await readUserService();

    return res.status(200).json(user)
}