import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";
import { usersRouter } from "./routes/users.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT;

// app.use -> Intercepts -> applies express.json() (Inbuilt Midd)
app.use(cors())
app.use(express.json())


const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is Connected 😊😊");
  return client;
}
export const client = await createConnection();

app.get("/", function (request, response) {
  response.send("Hello, Welcome to the App🌎🎉🎊🎊🎃🎃");
});

app.use("/users", usersRouter);



app.listen(PORT, () => console.log(`App started in ${PORT}`));
