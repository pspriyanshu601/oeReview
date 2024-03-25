import z from "zod";
import pool from "../database/db.js";

const reviewIdChecker = async (reviewId) => {
  const reviewIdCheckerSchema = z.number().int();

  const reviewIds = await pool.query("SELECT review_id FROM reviews");

  // Check if the reviewId is present in the fetched reviewIds
  const foundReviewId = reviewIds.rows.some(
    (row) => String(row.review_id) === String(reviewId)
  );

  if (foundReviewId === false) {
    return false;
  }

  try {
    reviewIdCheckerSchema.parse(reviewId);
    return true;
  } catch (error) {
    return false;
  }
};

export default reviewIdChecker;
