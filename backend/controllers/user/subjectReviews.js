import pool from "../../database/db.js";
import _ from "lodash";
import courseCodeChecker from "../../validators/courseCodeChecker.js";

const subjectReviewsController = async (req, res) => {
  try {
    if(!courseCodeChecker(req.params.courseCode)){
      return res.status(400).json({
        success:false,
        message:'Invalid Data'
      });
    }
    const { courseCode } = req.params;

    const subjectReviewsQuery = `
      SELECT r.details, r.stars, r.review_date 
      FROM reviews AS r 
      JOIN users AS u ON r.user_id = u.id 
      JOIN subjects AS s ON r.subject_id = s.subject_id 
      WHERE s.course_code = $1 AND r.isadminverified = $2;
    `;

    const subjectReviews = await pool.query(subjectReviewsQuery, [courseCode, true]);
    return res.status(200).json({
      success: true,
      message: 'Fetched reviews successfully',
      subjectReviews: subjectReviews.rows // Assuming the result is an array of rows
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};

export default subjectReviewsController;