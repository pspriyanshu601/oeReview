import validateAddSubjectBody from "../../validators/addSubject.js";
import pool from "../../database/db.js";

const addSubject = async (req, res) => {
  try {
    if (!validateAddSubjectBody(req.body)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Data",
      });
    }

    const { subjectName, courseCode, departmentId } = req.body;

    //cheking if subject already exist in the database

    var subjectExist = await pool.query(
      "SELECT * FROM subjects WHERE course_code=$1",
      [courseCode]
    );

    // console.log(subjectExist.rows.length);

    if (subjectExist.rows.length !== 0) {
      return res.status(400).json({
        success: false,
        message: "Subject already exist",
      });
    }

    // checking if department exist in the database

    var exist = await pool.query(
      "SELECT * FROM departments WHERE department_id=$1",
      [departmentId]
    );

    if (exist.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Department does not exist",
      });
    }

    // adding subject to the database
    await pool.query(
      "INSERT INTO subjects (subject_name, course_Code, department_id) VALUES ($1, $2, $3)",
      [subjectName, courseCode, departmentId]
    );

    return res.status(200).json({
      success: true,
      message: "Subject added successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default addSubject;
