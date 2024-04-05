import z from "zod";
import pool from "../database/db.js";

const subjectIdChecker = async (subjectId) => {
  const subjectIdData = await pool.query(
    "SELECT MIN(subject_id) AS min, MAX(subject_id) AS max FROM subjects"
  );

  const subjectIdCheckerSchema = z
    .number()
    .int()
    .min(subjectIdData.rows[0].min)
    .max(subjectIdData.rows[0].max);

  try {
    subjectIdCheckerSchema.parse(subjectId);
    return true;
  } catch (error) {
    return false;
  }
};

const numberOfSubjectChecker = (noOfSubjects) => {
  const noOfSubjectsCheckerSchema = z.number().int().min(1).max(6);

  try {
    noOfSubjectsCheckerSchema.parse(noOfSubjects);
    return true;
  } catch (error) {
    return false;
  }
};

export default { numberOfSubjectChecker, subjectIdChecker };
