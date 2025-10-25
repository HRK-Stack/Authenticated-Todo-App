import express, { json } from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import userRouter from "./routes/userRoutes.js";
import todoRouter from "./routes/todRoutes.js";
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user",userRouter);
app.use("/api/todo",todoRouter);


app.listen(process.env.PORT ,() => {
    console.log("Server Started");
});