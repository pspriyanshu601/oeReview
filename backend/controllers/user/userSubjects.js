import pool from "../../database/db.js";

const userSubjectsController = async (req, res) => {
  try {
    const { userId } = req.body;
    const subjectQuery = `
    SELECT    
    u.id AS user_id, 
    s.subject_name, 
    s.subject_id,
    s.course_code
    FROM users u
    JOIN 
    LATERAL jsonb_each_text(u.subject_ids) AS s_id ON true
    JOIN subjects s ON s.subject_id = (s_id.value)::int
    WHERE u.id = $1;
`;
    const unReviewedSubjectQuery=`SELECT    
    u.id AS user_id, 
    s.subject_name, 
    s.subject_id,
    s.course_code
    FROM 
    users u
    JOIN 
    LATERAL jsonb_each_text(u.subject_ids) AS s_id ON true
    JOIN 
    subjects s ON s.subject_id = (s_id.value)::int
    LEFT JOIN 
    reviews r ON u.id = r.user_id AND s.subject_id = r.subject_id
    WHERE 
    u.id = $1
    AND r.review_id IS NULL;`
    const userSubjects = await pool.query(subjectQuery,[userId]);
    const userUnreviewedSubjects=await pool.query(unReviewedSubjectQuery,[userId]);

    return res.status(200).json({
      success:true,
      message:'Fetched subjects successfully',
      userSubjects:userSubjects.rows,
      userUnreviewedSubjects:userUnreviewedSubjects.rows
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default userSubjectsController;
