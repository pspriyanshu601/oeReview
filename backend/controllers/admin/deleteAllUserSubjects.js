import pool from "../../database/db.js";

const deleteAllUserSubjectController = async (req, res) => {
  try {
    await pool.query("UPDATE users SET subject_ids = '{}'::jsonb, no_of_subjects = 0;");
    return res.status(200).json({
        success:true,
        message:'Deleted User subjects Successfully'
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default deleteAllUserSubjectController;
