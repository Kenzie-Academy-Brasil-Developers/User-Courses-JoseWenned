import { QueryResult } from "pg";
import { courseAddSchema, courseCreateSchema, courseReadSchema, courseSchema } from "../schemas/course.schema";
import { z } from "zod";

export type Course = z.infer<typeof courseSchema>;

export type CreateCourse = z.infer<typeof courseCreateSchema>;
export type CourseResult = QueryResult<Course>;
export type CourseRead = z.infer<typeof courseReadSchema>
export type courseAdd = z.infer<typeof courseAddSchema>