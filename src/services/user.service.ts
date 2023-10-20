import { client } from "../database";
import { UserCreate, User, UserResult, UserRead, UserCreateReturn } from "../interfaces/user.interface";
import format from "pg-format";
import { hashSync } from "bcryptjs";
import { userCreateReturnSchema, userReadSchema } from "../schemas/user.schema";
import AppError from "../errors/App.error";

export const createUserService = async (data: UserCreate): Promise<UserCreateReturn> => {

    data.password = hashSync(data.password, 10);

    const queryFormat: string = format (
        `INSERT INTO "users" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(data),
        Object.values(data)
    )

    const queryResult : UserResult = await client.query(queryFormat);
    const user : User = queryResult.rows[0]

    return userCreateReturnSchema.parse(user);
};

export const readUserService = async (): Promise<UserRead> => {

    const query : UserResult = await client.query(`SELECT * FROM "users";`)

    return userReadSchema.parse(query.rows);
}

export const readUserListService = async (userId: string) => {
    
    const queryFormat: string = (
        `SELECT 
        "c"."id" AS "courseId", 
        "c"."name" AS "courseName",
        "c"."description" AS "courseDescription",
        "uc"."active" AS "userActiveInCourse",
        "u"."id" AS "userId",
        "u"."name" AS "userName"
        FROM "users" AS "u"
        JOIN "userCourses" AS "uc" ON "u"."id" = "uc"."userId"
        JOIN "courses" AS "c" ON "c"."id" = "uc"."courseId" WHERE "u"."id" = $1;`
    )

    const queryResult = await client.query(queryFormat, [userId]);

    if(!queryResult.rowCount){
        throw new AppError("No course found",404);
    };

    return queryResult.rows;

};





