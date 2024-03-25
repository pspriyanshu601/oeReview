import pool from "../../database/db.js";

const clearAllSubjectReviewsController = async (req, res) => {
  try {
    //delete all verified reviews
    await pool.query("DELETE FROM reviews WHERE isadminverified=$1",[true]);
    //initialize stars and comments to zero
    await pool.query(
      "UPDATE subjects SET stars = 0, attendance_stars = 0, grades_stars = 0, quality_stars = 0, comments = 0"
    );
    return res.status(200).json({
      success: true,
      message: "Subjects Cleared Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default clearAllSubjectReviewsController;
