import { Request, Response } from "express";
import { Course, CourseRead } from "../interfaces/courses.interface";
import { courseCreateService, courseReadService, deleteCourseService } from "../services/course.service";
import { courseAddService, readUserCourseServise } from "../services/course.service";

export const courseCreateController = async (req: Request, res: Response): Promise<Response> => {
    const course : Course = await courseCreateService(req.body);

    return res.status(201).json(course)
};

export const courseReadController = async (req: Request, res: Response): Promise<Response> => {
    const courses : CourseRead = await courseReadService();

    return res.status(200).json(courses);
};

export const courseReadIdController = async (req: Request, res: Response) : Promise<Response> => {
    
    const userCourse = await readUserCourseServise(req.params.courseId);
    
    return res.status(200).json(userCourse);
};

export const courseAddController = async (req: Request, res: Response) : Promise<Response> => {

    const userId : string = req.params.userId
    const courseId : string = req.params.courseId

    await courseAddService(courseId, userId)

    return res.status(201).json({"message": "User sucessfully vinculed to course"})
}

export const courseDeleteController = async (req: Request, res: Response) : Promise<Responde> => {
    
    const userId: string = req.params.userId;
    const courseId: string = req.params.courseId;

    await deleteCourseService(courseId, userId);
    
    return res.status(204).json();
}
