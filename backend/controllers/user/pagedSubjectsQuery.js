import pool from "../../database/db.js";
import pageChecker from "../../validators/page.js";

function getElements(data, page) {
  const pageSize = 10; // Number of elements per page
  if (page == 0) return data;
  const startIndex = (page - 1) * pageSize; // Calculate start index
  const endIndex = startIndex + pageSize; // Calculate end index
  return data.slice(startIndex, endIndex); // Return elements for the given page
}

const pagedSubjectsQueryController = async (req, res) => {
  try {
    const query = req.params.filter;
    if (query !== "attendance" && query !== "quality" && query !== "grades") {
      return res.status(400).json({
        success: false,
        message: "Invalid filter Param",
      });
    }
    if (!(await pageChecker(parseInt(req.params.page)))) {
      return res.status(400).json({
        success: false,
        message: "This page does not exist",
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
      d.department_image,
      ws.comments
  FROM 
      WeightedSubjects ws
  JOIN 
      departments d ON ws.department_id = d.department_id
  ORDER BY 
      ws.weighted_value DESC;   
      `;

    const reviews = await pool.query(pageQuery);
    return res.status(200).json({
      success: true,
      message: "Fetched subjects successfully",
      reviews: getElements(reviews.rows, req.params.page),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default pagedSubjectsQueryController;
