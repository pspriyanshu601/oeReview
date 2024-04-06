import pool from "../../database/db.js";
import addSubjectValidator from "../../validators/subjectId.js";

const { numberOfSubjectChecker, subjectIdChecker } = addSubjectValidator;

const addUserSubjectsController = async (req, res) => {
  try {
    if (!numberOfSubjectChecker(req.body.noOfSubjects)) {
      return res.status(400).json({
        success: false,
        message: "Only upto 6 subjects allowed",
      });
    }

    const user = await pool.query("SELECT * FROM users WHERE id=$1", [
      req.body.userId,
    ]);

    const { userId, noOfSubjects } = req.body;
    const subjectIdsArray = [];
    if (user.rows[0].no_of_subjects === 6) {
      return res.status(400).json({
        success: false,
        message: "Semester subject review limit reached.",
      });
    }
    if (noOfSubjects+user.rows[0].no_of_subjects > 6) {
      return res.status(400).json({
        success: false,
        message: `you can add only ${6 - user.rows[0].no_of_subjects} more subjects`,
      });
    }

    for (var i = 1; i <= noOfSubjects; i++) {
      const subjectId = req.body[`subject${i}Id`];

      const existingSubjectIds = Object.values(user.rows[0].subject_ids || {});

      if (existingSubjectIds.includes(subjectId)) {
        return res.status(400).json({
          success: false,
          message: "You have already reviewed this subject",
        });
      }

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
    const hasDuplicates =
      subjectIdsArray.length !== new Set(subjectIdsArray).size;
    if (hasDuplicates) {
      return res.status(400).json({
        success: false,
        message: "Duplicate subjects not allowed",
      });
    }

    const subjectIdsObject = {};
    for (let i = 0; i < noOfSubjects; i++) {
      subjectIdsObject[`subject_${i + user.rows[0].no_of_subjects + 1}`] =
        subjectIdsArray[i];
    }

    // Execute the SQL query to update the users table
    const query = `
    UPDATE users
    SET subject_ids = subject_ids || $1,no_of_subjects=no_of_subjects+$2
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
