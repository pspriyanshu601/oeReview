import z from "zod";

const validateUpdateBody = (body) => {
  const registerSchema = z.object({
    details: z.string(),
    stars: z.number().int().min(1).max(5),
    attandence_stars: z.number().int().min(1).max(5),
    grades_stars: z.number().int().min(1).max(5),
    quality_stars: z.number().int().min(1).max(5),
  });

  try {
    registerSchema.parse(body);
    return true;
  } catch (err) {
    return false;
  }
};

export default validateUpdateBody;
