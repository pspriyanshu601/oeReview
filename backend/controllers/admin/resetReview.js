export default async function resetReview(req, res) {
  try {
    const { userId } = req.body;

    // Check if user exists
    const userExist = await pool.query("SELECT * FROM users WHERE user_id=$1", [
      userId,
    ]);

    if (userExist.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    await pool.query(
      "UPDATE users SET no_of_subjects = 0, subject_ids = '{}'::JSONB WHERE user_id=$1",
      [userId]
    );

    return res.status(200).json({
      success: true,
      message: "Review reset successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
