import z from "zod";

const validateAddSubjectBody = (body) => {
  const registerSchema = z.object({
    subjectName: z.string(),
    courseCode: z.string(),
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
