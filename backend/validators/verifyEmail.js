import z from "zod";

const validateVerifyEmailBody = (body) => {
  const registerSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    otp: z
      .string()
      .refine((value) => value.length === 6, {
        message: "OTP must be exactly 6 characters long",
      }),
  });

  try {
    registerSchema.parse(body);
    return true;
  } catch (err) {
    return err.errors.map((error) => error.message);
  }
};

export default validateVerifyEmailBody;
