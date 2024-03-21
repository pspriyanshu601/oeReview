import pool from "../../database/db.js";
import _ from "lodash";

const subjectReviewsController = async (req, res) => {
  try {
    const { courseCode, departmentName } = req.params;
    const dept_name = _.startCase(_.replace(departmentName, /-/g, ' '));

    const subjectReviewsQuery = `
      SELECT r.details, r.stars, r.review_date 
      FROM reviews AS r 
      JOIN users AS u ON r.user_id = u.id 
      JOIN subjects AS s ON r.subject_id = s.subject_id 
      JOIN departments AS d ON s.department_id = d.department_id 
      WHERE d.department_name = $1 AND s.course_code = $2 AND r.isadminverified = $3;
    `;

    const subjectReviews = await pool.query(subjectReviewsQuery, [dept_name, courseCode, true]);
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