import z from "zod";

const validateRegisterBody=(body)=>{

    const registerSchema=z.object({
        email: z.string().email(),
        password:z.string().min(6),
        username:z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/)
    });

    try{
        registerSchema.parse(body);
        return true;
    }
    catch(err){
        return false;
    }
}

export default validateRegisterBody;