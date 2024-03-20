import z from "zod";

const validateVerifyEmailBody = (body) => {
    const registerSchema = z.object({
        email: z.string().email(),
        otp: z.string().length(6), // Set the length of OTP to 6 characters
    });

    try {
        registerSchema.parse(body);
        return true;
    } catch (err) {
        return false;
    }
};

export default validateVerifyEmailBody;