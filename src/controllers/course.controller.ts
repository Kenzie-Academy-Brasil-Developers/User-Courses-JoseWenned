import { Request, Response } from "express";
import { Course, CourseRead } from "../interfaces/courses.interface";
import { courseCreateService, courseReadService } from "../services/course.service";

export const courseCreateController = async (req: Request, res: Response): Promise<Response> => {
    const course :Array<Course> = await courseCreateService(req.body);

    return res.status(201).json(course)
}

export const courseReadController = async (req: Request, res: Response): Promise<Response> => {
    const courses : CourseRead = await courseReadService();

    return res.status(200).json(courses)
}