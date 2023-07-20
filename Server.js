import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import actorRoutes from './routes/api/actors.js';
import movieRoutes from './routes/api/movies.js';
import producerRoutes from './routes/api/producers.js';
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

// Connect to db
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongoDB.🎉🎉");
  } catch (err) {
    console.log(err);
  }
};
connectToDB();



app.use('/api/movies', movieRoutes);
app.use('/api/actors', actorRoutes);
app.use('/api/producers', producerRoutes);


app.listen(PORT, () => console.log(`Server Running in Port ${PORT}`));
