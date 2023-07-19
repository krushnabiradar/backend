import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { actorRouter } from "./routes/actorRoute.js";
import { movieRouter } from "./routes/movieRoute.js";
import { producerRouter } from "./routes/producerRoute.js";
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

app.get("/", function (request, response) {
  response.send("This is IMDB clone 🎉🎉🎉");
});

app.use('/movies', movieRouter);
app.use('/actors',actorRouter);
app.use('/producers', producerRouter);


app.listen(PORT, () => console.log(`Server Running in Port ${PORT}`));
