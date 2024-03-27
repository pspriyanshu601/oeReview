import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" })
    .regex(/^[a-zA-Z0-9_ ]+$/, {
      message:
        "Username must contain only alphanumeric characters and underscores",
    }),
});

const validateRegisterBody = (body) => {
  try {
    registerSchema.parse(body);
    return true; // Return null if validation succeeds
  } catch (err) {
    // console.log(err);
    return err.errors.map((error) => error.message); // Return array of error messages
  }
};

export default validateRegisterBody;
