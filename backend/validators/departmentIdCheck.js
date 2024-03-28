import z from "zod";
import pool from "../database/db.js";

const departmentIdChecker = async (departmentId) => {
  const departments = await pool.query("SELECT COUNT(*) FROM departments");

  const departmentIdCheckerSchema = z
    .number()
    .int()
    .min(1)
    .max(departments.rows[0].count);
  try {
    departmentIdCheckerSchema.parse(departmentId);
    return true;
  } catch (error) {
    return false;
  }
};

export default departmentIdChecker;
