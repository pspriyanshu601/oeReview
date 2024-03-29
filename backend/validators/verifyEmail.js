import z from "zod";

const validateVerifyEmailBody = (body) => {
  const registerSchema = z.object({
    otp: z.string().min(6).max(6),
  });

  try {
    registerSchema.parse(body);
    return true;
  } catch (err) {
    return err.errors.map((error) => error.message);
  }
};

export default validateVerifyEmailBody;
