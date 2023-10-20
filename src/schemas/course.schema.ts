import { z } from "zod";

export const courseSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(15).nonempty(),
    description: z.string().nonempty()
})

export const courseCreateSchema = courseSchema.omit({id: true});
export const courseReadSchema = courseSchema.array();

export const courseAddSchema = z.object({
    userId: z.number().positive(),
    courseId: z.number().positive()
})