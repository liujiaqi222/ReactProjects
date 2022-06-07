import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import 'dotenv/config';
import connectDB from "./db/connect.js";
import postsRoute from './routes/posts.js';
import 'express-async-errors';

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(cors());
app.use('/posts', postsRoute);
app.use((err, req, res, next) => {
  console.log(err);
  res.json({ error: err.message });
  next(err);
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log('running at port http://localhost:3000');
    })
  } catch (err) {
    console.log(err);
  }
}

start()

