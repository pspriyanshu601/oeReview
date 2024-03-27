import pool from "../../database/db.js";
import _ from 'lodash'
import departmentIdChecker from "../../validators/departmentIdCheck.js";


const departmentSubjectsController = async (req, res) => {
  try {
    if(! await departmentIdChecker(parseInt(req.params.departmentId))){
      return res.status(400).json({
        success:false,
        message:'Invalid Department Id'
      })
    }
    const {departmentId}=req.params;
    const departmentSubjects = await pool.query(
      "SELECT * FROM subjects WHERE department_id=$1",
      [departmentId]
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