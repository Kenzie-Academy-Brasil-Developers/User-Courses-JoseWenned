import { Request, Response } from "express";
import { sessionService } from "../services/session.service";
import { User, userResult } from "../interfaces/user.interface";

export const sessionController = async (req: Request, res: Response) : Promise<Response> => {
    const user : userResult = await sessionService.(req.body);

    return res.status(200).json();
}