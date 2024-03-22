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
    const userSubjects = await pool.query(subjectQuery,[userId]);
    return res.status(200).json({
      success:true,
      message:'Fetched subjects successfully',
      userSubjects:userSubjects.rows
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
