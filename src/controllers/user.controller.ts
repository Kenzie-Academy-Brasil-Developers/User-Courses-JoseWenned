import { Request, Response } from "express";
import { createUserService } from "../services/user.service";
import { User } from "../interfaces/userCreate.interface";

export const createUserController = async (req:Request, res:Response, ): Promise<Response> => {
    const user : User = await createUserService(req.body);

    return res.status(201).json(user);
};