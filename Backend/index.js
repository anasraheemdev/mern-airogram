import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.listen(PORT,()=>{
    console.log("Server running on That Port")
})