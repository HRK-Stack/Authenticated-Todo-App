import express, { json } from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';


dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    res.send("hello");
});

app.listen(process.env.PORT);