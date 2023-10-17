import { z } from "zod";

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50).min(3),
    email: z.string().email().max(50),
    password: z.string().max(120),
    admin: z.boolean().optional().default(false)
});

export const userCreateSchema = userSchema.omit({id: true});

export const userCreateUpdate = userCreateSchema.partial();