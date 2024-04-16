import format from "pg-format";
import { Course, CourseRead, CourseResult, CreateCourse } from "../interfaces/courses.interface";
import { client } from "../database";

export const courseCreateService = async (data: CreateCourse) : Promise<Course>=> {

    const queryFormat : string = format (
        `INSERT INTO "courses" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(data),
        Object.values(data)
    );
   
    const query : CourseResult = await client.query(queryFormat);

    return query.rows[0];

};

export const courseReadService = async () : Promise<CourseRead> => {

    const query : string = `SELECT * FROM "courses";`
    const queryResult : CourseResult = await client.query(query)

    return queryResult.rows;

};

export const courseAddService = async (courseId: string, userId: string) => {
    const queryString : string = `INSERT INTO "userCourses" ("userId", "courseId") VALUES ($1, $2);`

    await client.query(queryString, [courseId, userId]);
}

export const readUserCourseServise = async (courseId: string) => {

    const queryFormat: string = (
        `SELECT 
        "u"."id" AS "userId",
        "u"."name" AS "userName",
        "c"."id" AS "courseId",
        "c"."name" AS "courseName",
        "c"."description" AS "courseDescription",
        "uc"."active" AS "userActiveInCourse"
        FROM "users" AS "u"
        JOIN "userCourses" AS "uc" ON "u"."id" = "uc"."userId"
        JOIN "courses" AS "c" ON "c"."id" = "uc"."courseId" WHERE "c"."id" = $1;`
    )

    const queryResult = await client.query(queryFormat, [courseId]);

    return queryResult.rows;
};

export const deleteCourseService = async (courseId: string, userId: string) : Promise<void> => {
    
    const queryString : string = `UPDATE "userCourses" SET active = false WHERE "courseId" = $1 AND "userId" = $2;`;

    await client.query(queryString, [courseId, userId]);

}

