import z from "zod";

const validateUpdateBody = (body) => {

  const registerSchema = z.object({
    details: z.string(),
    stars: z.number().int().min(1).max(5),
    attendance_stars: z.number().int().min(1).max(5),
    grades_stars: z.number().int().min(1).max(5),
    quality_stars: z.number().int().min(1).max(5),
  }).refine((data) => {
    if (data.stars < 1 || data.stars > 5) {
      throw new Error('Stars must be between 1 and 5');
    }
    if (data.attendance_stars < 1 || data.attendance_stars > 5) {
      throw new Error('Attendance stars must be between 1 and 5');
    }
    if (data.grades_stars < 1 || data.grades_stars > 5) {
      throw new Error('Grades stars must be between 1 and 5');
    }
    if (data.quality_stars < 1 || data.quality_stars > 5) {
      throw new Error('Quality stars must be between 1 and 5');
    }
    return true;
  });
  try {
    registerSchema.parse(body);
    return true;
  } catch (err) {
    return false;
  }
};

export default validateUpdateBody;
