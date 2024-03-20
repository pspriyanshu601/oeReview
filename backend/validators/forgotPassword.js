import z from "zod";

const validateForgotPasswordBody=(body)=>{

    const registerSchema=z.object({
        email: z.string().email(),
        newPassword:z.string().min(6),
    });

    try{
        registerSchema.parse(body);
        return true;
    }
    catch(err){
        return false;
    }
}

export default validateForgotPasswordBody;