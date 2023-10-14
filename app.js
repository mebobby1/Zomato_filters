import express from "express";
import userRouter from "./routes/index.js";

export const app = express();



app.use("/api",userRouter)


