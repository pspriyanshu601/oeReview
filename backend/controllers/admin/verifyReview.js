import pool from "../../database/db.js";
import z from "zod";

const verifyReview = async (req, res) => {
  try {
    const reviewIdSchema = z.number();

    try {
      reviewIdSchema.parse(req.body.reviewId);
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Invalid Data",
      });
    }
    const { reviewId } = req.body;

    // set the review status to verified
    await pool.query(
      "UPDATE reviews SET isadminverified = true WHERE review_id = $1",
      [reviewId]
    );

    return res.status(200).json({
      success: true,
      message: "Review verified successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default verifyReview;
