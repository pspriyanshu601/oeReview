import pool from "../../database/db.js";

const unverifiedReviews = async (req, res) => {
  try {
    // adminRouter.get("/unverifiedReviews/:page", allUnverifiedReviews);

    const page = req.params.page;

    const limit = 10;
    const startIndex = (page - 1) * limit;

    // if page == 0 return all also send the username of the user who posted the review
    if (page == 0) {
      const reviews = await pool.query(
        "SELECT reviews.*, users.username FROM reviews INNER JOIN users ON reviews.user_id = users.id WHERE reviews.isadminverified = false ORDER BY reviews.review_id DESC"
      );

      return res.status(200).json({
        success: true,
        reviews: reviews.rows,
      });
    }

    const reviews = await pool.query(
      "SELECT reviews.*, users.username FROM reviews INNER JOIN users ON reviews.user_id = users.id WHERE reviews.isadminverified = false ORDER BY reviews.review_id DESC LIMIT $1 OFFSET $2",
      [limit, startIndex]
    );

    return res.status(200).json({
      success: true,
      reviews: reviews.rows,
      message: "Reviews fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default unverifiedReviews;
