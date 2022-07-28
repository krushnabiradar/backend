import express from "express";
import{ createUser } from "./routes/helper"
const router = express.Router();


router.post("/signup", async function (request, response) {
  const data = request.body;
  console.log(data);

  const result = await createUser(data);
  response.send(result);
});

export const usersRouter = router;