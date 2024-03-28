import z from "zod";

const validateAddSubjectBody = (body) => {
  const registerSchema = z.object({
    subjectName: z.string(),
    courseCode: z.string().refine((value) => {
      const pattern = /^[A-Z]{3}\d{3}$/;
      return pattern.test(value);
    }),
    departmentId: z.number(),
  });

  try {
    registerSchema.parse(body);
    return true;
  } catch (err) {
    return false;
  }
};

export default validateAddSubjectBody;
