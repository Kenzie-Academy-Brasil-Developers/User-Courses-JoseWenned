import format from "pg-format";
import { Course, CourseRead, CourseResult, CreateCourse } from "../interfaces/courses.interface";
import { client } from "../database";

export const courseCreateService = async (data: CreateCourse) : Promise<Array<Course>> => {

    const queryFormat : string = format (
        `INSERT INTO "courses" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(data),
        Object.values(data)
    );
   
    const query : CourseResult = await client.query(queryFormat);

    return query.rows;

};

export const courseReadService = async () : Promise<CourseRead> => {

    const query : string = `SELECT * FROM "courses";`
    const queryResult : CourseResult = await client.query(query)

    return queryResult.rows;

};