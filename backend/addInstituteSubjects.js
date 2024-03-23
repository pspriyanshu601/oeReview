import courses from "./utils/courses.js";
import pool from "./database/db.js";

const coursesMap = {
    "CE": 1,
    "CS": 2,
    "EE": 3,
    "EC": 4,
    "ES": 5,
    "FM": 6,
    "HS": 7,
    "MS": 8,
    "MC": 9,
    "ME": 10,
    "MN": 11,
    "PE": 12,
    "PH": 13,
    "GL": 14,
    "GP": 15,
    "CH": 16,
    "CY": 17,
    "MM":18,
};

// Define an async function to handle the insertion
async function insertSubjects() {
    const insertPromises = courses.map(async course => {
        try {
            const data = course.name;
            const course_code = data.slice(3, 9);
            const course_name = data.slice(11);
            const dept_id = coursesMap[course_code.slice(0, 2)];

            if (course_code[2] === 'E' || course_code[2] === 'O' || course_code[2] === 'D') {
                // console.log(course_code);
                // console.log(course_name);
                // console.log(dept_id);
                await pool.query("INSERT INTO subjects (subject_name, course_code, department_id) VALUES ($1, $2, $3)", [course_name, course_code, dept_id]);
            }
        } catch (error) {
            console.log(error);
        }
    });

    await Promise.all(insertPromises);
}

insertSubjects();
