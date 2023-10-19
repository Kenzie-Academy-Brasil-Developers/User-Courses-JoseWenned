import { z } from "zod";

export const courseSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(15).nonempty(),
    description: z.string().nonempty()
})

export const courseCreateSchema = courseSchema.omit({id: true}).array().min(1);
export const courseReadSchema = courseSchema.array();