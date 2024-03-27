import z from "zod";

const validateReviewBody = (body) => {
  const registerSchema = z.object({
    details: z.string().min(1, { message: "Remarks should not be empty" }),
    stars: z
      .number()
      .int()
      .refine((stars) => stars >= 1 && stars <= 5, {
        message: "Stars must be between 1 and 5",
      }),
    attandance_stars: z
      .number()
      .int()
      .refine(
        (attandance_stars) => attandance_stars >= 1 && attandance_stars <= 5,
        {
          message: "Attendance stars must be between 1 and 5",
        }
      ),
    grade_stars: z
      .number()
      .int()
      .refine((grade_stars) => grade_stars >= 1 && grade_stars <= 5, {
        message: "Grade stars must be between 1 and 5",
      }),
    quality_stars: z
      .number()
      .int()
      .refine((quality_stars) => quality_stars >= 1 && quality_stars <= 5, {
        message: "Quality stars must be between 1 and 5",
      }),
  });

  try {
    registerSchema.parse(body);
    return true;
  } catch (err) {
    return err.errors.map((error) => error.message);
  }
};

export default validateReviewBody;
