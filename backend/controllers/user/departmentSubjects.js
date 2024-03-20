import pool from "../../database/db.js";
import _ from 'lodash'


const departmentSubjectsController = async (req, res) => {
  try {
    const dept_name = _.startCase( _.replace(req.params.departmentName, /-/g, ' '));
    const departmentSubjects = await pool.query(
      "SELECT s.subject_name,s.course_code FROM departments AS d JOIN subjects AS s ON d.department_id = s.department_id WHERE d.department_name = $1;",
      [dept_name]
    );
    return res.status(200).json({
      success: true,
      message: "Fetched department subjects successfully",
      subjects: departmentSubjects.rows,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};

export default departmentSubjectsController;