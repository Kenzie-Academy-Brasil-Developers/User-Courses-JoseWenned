import { Request, Response } from "express";
import { createUserService, readUserListService, readUserService } from "../services/user.service";
import { UserRead } from "../interfaces/user.interface";

export const createUserController = async (req:Request, res:Response ): Promise<Response> => {
    const user = await createUserService(req.body);

    return res.status(201).json(user);
};

export const readUserController = async (req:Request, res:Response): Promise<Response> => {
    const user: UserRead = await readUserService();

    return res.status(200).json(user)
}

export const readUserListController = async (req:Request, res:Response): Promise<Response> => {
    const user = await readUserListService(req.params.id);

    return res.status(200).json(user)
}
