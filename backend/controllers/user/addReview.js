import pool from "../../database/db.js";
import validateReviewBody from "../../validators/addReview.js";
import courseCodeChecker from "../../validators/courseCodeChecker.js";

const addReviewController = async (req, res) => {
  try {
    if (!courseCodeChecker(req.params.courseCode)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Course Code",
      });
    }
    const errorMessage = validateReviewBody(req.body);
    if (errorMessage.length > 0) {
      return res.status(400).send({
        success: false,
        message: errorMessage[0],
      });
    }

    const user_id = req.body.userId;
    const { details, stars, attandance_stars, quality_stars, grade_stars } =
      req.body;
    const subject = await pool.query(
      "SELECT * FROM subjects WHERE course_code=$1",
      [req.params.courseCode]
    );
    const subject_id = subject.rows[0].subject_id;

    //check if corresponding subject exist or not
    if (subject.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "This subject does not exist",
      });
    }

    //check if user has already reviewed but not verified
    const alreadyAddedNotVerified = await pool.query(
      "SELECT * FROM reviews WHERE user_id=$1 AND subject_id=$2 AND isadminverified=$3",
      [parseInt(user_id), parseInt(subject_id), false]
    );
    if (alreadyAddedNotVerified.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Admin verification pending for the review",
      });
    }

    //check if user has already reviewed and is admin verified

    const alreadyAddedVerified = await pool.query(
      "SELECT * FROM reviews WHERE user_id=$1 AND subject_id=$2 AND isadminverified=$3",
      [parseInt(user_id), parseInt(subject_id), true]
    );

    if (alreadyAddedVerified.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "You have already added reviews",
      });
    }

    const addReview = `INSERT INTO reviews (details, stars, subject_id, user_id, attendance_stars, grades_stars, quality_stars)
    VALUES ($1, $2, $3, $4, $5, $6, $7);
    `;

    //finally adds the review
    const lol = await pool.query(addReview, [
      details,
      stars,
      subject_id,
      user_id,
      attandance_stars,
      grade_stars,
      quality_stars,
    ]);
    return res.status(200).json({
      success: true,
      message: "The review will be added after admin verification",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default addReviewController;
