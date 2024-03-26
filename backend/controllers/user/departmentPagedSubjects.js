import pool from "../../database/db.js";
import pageChecker from "../../validators/page.js";

const departmentPagedSubjectsController = async (req, res) => {
  try {
    const query = req.params.filter;
    if (
      query !== "attendance" &&
      query !== "quality" &&
      query !== "grades" &&
      query !== "overall"
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid filter Param",
      });
    }
    if (query === "overall") {
      const overallQuery = `
      WITH WeightedSubjects AS (
        SELECT 
            s.*,
            CAST((5 + s.stars) AS FLOAT) / (10 + s.comments * 5) AS weighted_value,
            ROUND(CAST(s.stars AS NUMERIC) / NULLIF(s.comments, 0), 2) AS average_rating
        FROM 
            subjects s
    )
    SELECT 
        ws.subject_name,
        ws.course_code,
        ws.subject_id,
        ws.average_rating,
        d.department_name,
        ws.comments
    FROM 
        WeightedSubjects ws
    JOIN 
        departments d ON ws.department_id = d.department_id
    WHERE 
        d.department_id = $1
        AND ws.comments > 0  
    ORDER BY 
        ws.weighted_value DESC;    
        `;
      const subjects = await pool.query(overallQuery, [
        parseInt(req.params.departmentId),
      ]);
      return res.status(200).json({
        success: true,
        message: "Fetched subjects successfully",
        subjects: subjects.rows,
      });
    }
    const pageQuery = `
    WITH WeightedSubjects AS (
      SELECT 
          s.*,
          CAST((5 + s.${query}_stars) AS FLOAT) / NULLIF((10 + s.comments * 5), 0) AS weighted_value,
          ROUND(CAST(s.${query}_stars AS NUMERIC) / NULLIF(s.comments, 0), 2) AS average_${query}_rating
      FROM 
          subjects s
      WHERE 
          s.comments > 0  -- Filter out subjects with zero comments
  )
  SELECT 
      ws.subject_name,
      ws.subject_id,
      ws.course_code,
      ws.average_${query}_rating,
      d.department_name,
      ws.comments
  FROM 
      WeightedSubjects ws
  JOIN 
      departments d ON ws.department_id = d.department_id
  WHERE 
      d.department_id = $1
  ORDER BY 
      ws.weighted_value DESC;    
      `;

    const reviews = await pool.query(pageQuery, [req.params.departmentId]);
    return res.status(200).json({
      success: true,
      message: "Fetched subjects successfully",
      subjects: reviews.rows,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default departmentPagedSubjectsController;
