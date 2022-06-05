import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import 'dotenv/config';
import connectDB from "./db/connect.js";

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(cors());


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log('running at port http://localhost:3000');
    })
  } catch (err) {
    console.log(err);
  }
}

start()

