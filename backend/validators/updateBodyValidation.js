import z from "zod";

const registerSchema = z.object({
  details: z.string().min(1, { message: "Remarks should not be empty" }),
  stars: z
    .number()
    .int()
    .refine((value) => value >= 1 && value <= 5, {
      message: "Stars must be between 1 and 5",
    }),
  attendance_stars: z
    .number()
    .int()
    .refine((value) => value >= 1 && value <= 5, {
      message: "Attendance stars must be between 1 and 5",
    }),
  grades_stars: z
    .number()
    .int()
    .refine((value) => value >= 1 && value <= 5, {
      message: "Grades stars must be between 1 and 5",
    }),
  quality_stars: z
    .number()
    .int()
    .refine((value) => value >= 1 && value <= 5, {
      message: "Quality stars must be between 1 and 5",
    }),
});

const validateUpdateBody = (body) => {
  try {
    registerSchema.parse(body);
    return true;
  } catch (err) {
    return err.errors.map((error) => error.message);
  }
};

export default validateUpdateBody;
