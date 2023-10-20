import format from "pg-format";
import { Course, CourseRead, CourseResult, CreateCourse } from "../interfaces/courses.interface";
import { client } from "../database";
import AppError from "../errors/App.error";

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
    const queryString : string = `INSERT INTO "userCourse" ("userId", "courseId") VALUES ($1, $2);`

    await client.query(queryString, [courseId, userId]);
}

export const readUserCourseServise = async (userId: string) => {

    const queryFormat: string = (
        `SELECT 
        c.id "courseId"
        c.name "courseName"
        c.description "courseDescription"
        uc.active "userActiveCourse"
        u.id "userId"
        u.name "userName"
        FROM "courses" c
        JOIN "userCourses" uc ON c.id = uc."courseId"
        JOIN users u ON u.id = uc."userId" WHERE u.id = $1;`
    )

    const queryResult = await client.query(queryFormat, [userId]);

    if(queryResult.rowCount === 0){
        throw new AppError("No course found",404);
    };

    return queryResult.rows;
};

export const deleteCourseService = async (courseId: string, userId: string) : Promise<void> => {
    
    const queryString : string = `UPDATE "userCourses" SET active = false WHERE "courseId" = $1 AND "userId" = $2;`;

    await client.query(queryString, [courseId, userId]);

}

