import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

connectDB();

app.get("/",(req,res) => {
    res.send("hello");
});

app.listen(process.env.PORT);