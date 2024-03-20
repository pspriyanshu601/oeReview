import express from 'express';
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port=process.env.PORT;

app.get("/",async (res)=>{
    res.status(200).send({
        success : true,
        message : "server healthy"
    })
});



app.listen(port);