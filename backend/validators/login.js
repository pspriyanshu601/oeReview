import z from "zod";

const validateLoginBody = (body) => {
  const registerSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
  });

  try {
    registerSchema.parse(body);
    return true;
  } catch (err) {
    return err.errors.map((error) => error.message);
  }
};

export default validateLoginBody;
