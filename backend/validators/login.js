import z from "zod";

const validateLoginBody=(body)=>{

    const registerSchema=z.object({
        email: z.string().email(),
        password:z.string().min(6),
    });

    try{
        registerSchema.parse(body);
        return true;
    }
    catch(err){
        return false;
    }
}

export default validateLoginBody;