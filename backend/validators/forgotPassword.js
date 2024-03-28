import z from "zod";

const validateForgotPasswordBody = (body) => {
  const registerSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    newPassword: z
      .string()
      .min(6, { message: "New password must be at least 6 characters long" }),
  });
  try {
    registerSchema.parse(body);
    return true;
  } catch (err) {
    return err.errors.map((error) => error.message);
  }
};

export default validateForgotPasswordBody;
