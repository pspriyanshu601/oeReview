import pool from "../../database/db.js";

const allSubjectsController = async (req, res) => {
  try {
    let subjects={};

    for(let i=1;i<=18;i++){
      const subjectOfDepartment=await pool.query("SELECT * FROM subjects WHERE department_id=$1",[i]);
      subjects[i]=subjectOfDepartment.rows;
    }

    return res.status(200).json({
      success: true,
      message: "Fetched all subjects successfully",
      subjects,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};

export default allSubjectsController;
