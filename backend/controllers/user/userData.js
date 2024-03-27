import pool from "../../database/db.js";

const userDataController = async (req, res) => {
  try {
    const userId = req.body.userId;
    const userReviewsQuery = `
        SELECT 
        r.review_id,
        r.details,
        r.stars,
        r.attendance_stars,
        r.grades_stars,
        r.quality_stars,
        r.review_date,  
        r.subject_id,
        r.isadminverified,
        s.subject_name,
        s.course_code,
        d.department_name
        FROM reviews AS r 
        JOIN subjects AS s
        ON s.subject_id=r.subject_id    
        JOIN departments AS d 
        ON d.department_id=s.department_id
        WHERE user_id=$1;
        `;
    const userReviewsData = await pool.query(userReviewsQuery, [userId]);
    // Fetch the user's data including subject_ids
    const userDataQuery = `
        SELECT subject_ids
        FROM users
        WHERE id = $1;
    `;
    const userDataResult = await pool.query(userDataQuery, [userId]);
    const subjectIdsData = userDataResult.rows[0].subject_ids;

    let subjectIdsObj;
    try {
      // Use the subjectIdsData object directly
      subjectIdsObj = subjectIdsData;
    } catch (error) {
      // Handle JSON parsing error
      console.error("Error parsing subject_ids JSON:", error);
      return res.status(400).json({
        success: false,
        message: "Error parsing subject_ids JSON",
      });
    }

    // Extract the subject IDs
    const subjectIdsArray = Object.values(subjectIdsObj);

    // Fetch the subject details for the user's subjects
    const subjectsQuery = `
    SELECT subject_id, subject_name, course_code, d.department_name
    FROM subjects
    JOIN departments AS d ON d.department_id = subjects.department_id
    WHERE subject_id IN (${subjectIdsArray.length > 0 ? subjectIdsArray.join(",") : "NULL"})
  `;

    const userSubjectsData = await pool.query(subjectsQuery);

    const userData = await pool.query(
      "SELECT u.email,u.username,u.isadmin,u.no_of_subjects FROM users AS u WHERE id=$1;",
      [userId]
    );

    return res.status(200).json({
      success: true,
      message: "Fetched user data successfully",
      userData: userData.rows[0],
      userSubjects: userSubjectsData.rows,
      userReviews: userReviewsData.rows,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default userDataController;
