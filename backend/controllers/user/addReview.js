import pool from "../../database/db.js";

const addReviewController = async (req, res) => {
  try {
    const user_id = req.body.userId;
    const { details, stars } = req.body;
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
      [user_id, subject_id, false]
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
      [user_id, subject_id, true]
    );
    if (alreadyAddedVerified.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "You have already added reviews",
      });
    }

    const increaseStarComment = `UPDATE subjects
    SET 
        stars = stars + $1,
        comments = comments + 1
    WHERE 
        subject_id = $2;
    `;
    const addReview = `INSERT INTO reviews (details, stars, subject_id, user_id)
    VALUES ($1, $2, $3, $4);
    `;

    //finally adds the review
    await pool.query(addReview, [details, stars, subject_id, user_id]);
    await pool.query(increaseStarComment, [stars, subject_id]);
    return res.status(200).json({
      success: true,
      message: "The review will be added after admin verification",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default addReviewController;
