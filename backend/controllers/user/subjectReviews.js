import pool from "../../database/db.js";
import _ from "lodash";
import courseCodeChecker from "../../validators/courseCodeChecker.js";

const subjectReviewsController = async (req, res) => {
  try {
    if (!courseCodeChecker(req.params.courseCode)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Data",
      });
    }
    const { courseCode } = req.params;

    const subjectReviewsQuery = `
    SELECT 
    r.details, 
    r.stars, 
    CASE 
        WHEN AGE(NOW(), r.review_date) < INTERVAL '1 day' THEN CONCAT(EXTRACT(HOUR FROM AGE(NOW(), r.review_date)), ' hours ago')
        WHEN AGE(NOW(), r.review_date) < INTERVAL '30 days' THEN CONCAT(EXTRACT(DAY FROM AGE(NOW(), r.review_date)), ' days ago')
        WHEN AGE(NOW(), r.review_date) < INTERVAL '1 year' THEN CONCAT(EXTRACT(MONTH FROM AGE(NOW(), r.review_date)), ' months ago')
        ELSE CONCAT(EXTRACT(YEAR FROM AGE(NOW(), r.review_date)), ' years ago')
    END AS time_elapsed,
    r.attendance_stars,
    r.grades_stars,
    r.quality_stars,
    s.subject_name
    FROM 
    reviews AS r 
    JOIN 
    users AS u ON r.user_id = u.id 
    JOIN 
    subjects AS s ON r.subject_id = s.subject_id 
    WHERE 
    s.course_code = $1 AND r.isadminverified = $2;

    `;
    const subjectName = await pool.query(
      "SELECT * FROM subjects WHERE course_code=$1",
      [courseCode]
    );

    const subjectReviews = await pool.query(subjectReviewsQuery, [
      courseCode,
      true,
    ]);

    const stars = [0, 0, 0, 0, 0];
    const attendanceStars = [0, 0, 0, 0, 0];
    const gradesStars = [0, 0, 0, 0, 0];
    const qualityStars = [0, 0, 0, 0, 0];

    var avgStars = 0;
    var avgAttendanceStars = 0;
    var avgGradesStars = 0;
    var avgQualityStars = 0;

    subjectReviews.rows.forEach((review) => {
      avgStars += review.stars;
      avgAttendanceStars += review.attendance_stars;
      avgGradesStars += review.grades_stars;
      avgQualityStars += review.quality_stars;

      stars[review.stars - 1]++;
      attendanceStars[review.attendance_stars - 1]++;
      gradesStars[review.grades_stars - 1]++;
      qualityStars[review.quality_stars - 1]++;
    });

    // one place after point

    const totalReviews = subjectReviews.rows.length;
    avgStars /= totalReviews;
    avgAttendanceStars /= totalReviews;
    avgGradesStars /= totalReviews;
    avgQualityStars /= totalReviews;

    // average stars of each category

    return res.status(200).json({
      success: true,
      message: "Fetched reviews successfully",
      subjectName: subjectName.rows[0].subject_name,
      subjectReviews: subjectReviews.rows, // Assuming the result is an array of rows
      stars,
      attendanceStars,
      gradesStars,
      qualityStars,
      avgStars,
      avgAttendanceStars,
      avgGradesStars,
      avgQualityStars,
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
