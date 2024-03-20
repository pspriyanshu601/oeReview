import pool from "../../database/db.js";
import z from "zod";

const verifyReview = async (req, res) => {
  try {
    const reviewIdSchema = z.number();
    const verifiedSchema = z.boolean();

    try {
      reviewIdSchema.parse(req.body.reviewId);
      verifiedSchema.parse(req.body.verified);
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Invalid Data",
      });
    }
    const { reviewId, verified } = req.body;
    if (verified) {
      await pool.query(
        "UPDATE reviews SET isadminverified = true WHERE review_id = $1",
        [reviewId]
      );
    } else {
      await pool.query("DELETE FROM reviews WHERE review_id = $1", [reviewId]);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default verifyReview;
