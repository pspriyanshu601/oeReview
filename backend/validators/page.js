import z from "zod";
import pool from "../database/db.js";

const pageChecker = async (page) => {
  const pageData = await pool.query("SELECT COUNT(*) FROM subjects");

  const limit = Math.ceil(pageData.rows[0].count / 10);
  const pageCheckerSchema = z.number().int().min(0).max(limit);

  try {
    pageCheckerSchema.parse(page);
    return true;
  } catch (error) {
    return false;
  }
};

export default pageChecker;
