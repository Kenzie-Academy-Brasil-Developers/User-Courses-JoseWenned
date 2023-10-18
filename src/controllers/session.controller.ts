import { Request, Response } from "express";
import { loginService } from "../services/session.service";
import { sessionReturn } from "../interfaces/session.interface";

export const sessionLoginController = async (req: Request, res: Response): Promise<Response> => {
   
    const token : sessionReturn = await loginService(req.body);

    return res.status(200).json(token);

}