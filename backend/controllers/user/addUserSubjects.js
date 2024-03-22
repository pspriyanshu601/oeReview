import pool from "../../database/db.js";
import addSubjectValidator from "../../validators/subjectId.js";

const { numberOfSubjectChecker, subjectIdChecker } = addSubjectValidator;

const addUserSubjectsController = async (req, res) => {
  try {
    if (!numberOfSubjectChecker(req.body.noOfSubjects)) {
      return res.status(400).json({
        success: false,
        message: "Only upto 3 subjects allowed",
      });
    }
    const { userId, noOfSubjects } = req.body;
    const subjectIdsArray = [];

    for (var i = 1; i <= noOfSubjects; i++) {
      const subjectId = req.body[`subject${i}Id`];
      if (
        typeof subjectId === "undefined" ||
        !(await subjectIdChecker(subjectId))
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid Subject Ids",
        });
      }
      subjectIdsArray.push(req.body[`subject${i}Id`]);
    }

    const subjectIdsObject = {};
    for (let i = 0; i < noOfSubjects; i++) {
      subjectIdsObject[`subject_${i + 1}`] = subjectIdsArray[i];
    }

    //checking if users has alreay added subject
    const alreadyAddedSubjects = await pool.query(
      "SELECT subject_Ids FROM users WHERE id=$1",
      [userId]
    );

    if (Object.keys(alreadyAddedSubjects.rows[0].subject_ids).length > 0) {
      return res.status(400).json({
        success: false,
        message: "Already added subjects wait for next sem to add subjects",
      });
    }

    // Execute the SQL query to update the users table
    const query = `
    UPDATE users
    SET subject_ids = $1::jsonb,
        no_of_subjects = $2
    WHERE id = $3;
    `;
    await pool.query(query, [subjectIdsObject, noOfSubjects, userId]);
    return res.status(200).json({
      success: true,
      message: "Added Subjects Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default addUserSubjectsController;
