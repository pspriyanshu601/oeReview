import pool from "../../database/db.js";

function getElements(data, page) {
  const pageSize = 10; // Number of elements per page
  const startIndex = (page - 1) * pageSize; // Calculate start index
  const endIndex = startIndex + pageSize; // Calculate end index
  return data.slice(startIndex, endIndex); // Return elements for the given page
}

const pagedSubjectsController = async (req, res) => {
  try {
    const pageQuery = `
        WITH WeightedSubjects AS (
            SELECT 
               *,
                CAST((5 + stars) AS FLOAT) / CAST((10 + comments * 5) AS FLOAT) AS weighted_value 
            FROM 
                subjects 
        )
        SELECT 
            comments,
            stars,
            subject_name,
            course_code
        FROM 
            WeightedSubjects
        ORDER BY 
            weighted_value DESC;
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
      message: "Internal Server Error",
    });
  }
};

export default pagedSubjectsController;
