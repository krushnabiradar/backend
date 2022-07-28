import bcrypt from "bcrypt";
import express from "express";
import { createUser, getUserByEmail } from "./helper.js";
import jwt from "jsonwebtoken";

const router = express.Router();

async function genHashPassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

router.post("/signup", async function (request, response) {
  const { email, password } = request.body;

  const emailFromDB = await getUserByEmail(email);
  // console.log(emailFromDB);

  if (emailFromDB) {
    response.status(400).send({ msg: "Email already exists" });
  } else if (password.length < 8) {
    response.send({ msg: "Password must be greater 8" });
  } else {
    const hashPassword = await genHashPassword(password);
    console.log(hashPassword);

    const result = await createUser({
      email: email,
      password: hashPassword,
    });
    response.send(result);
  }
});

router.post("/login", async function (request, response) {
  const { email, password } = request.body;

  const emailFromDB = await getUserByEmail(email);
  // console.log(emailFromDB);

  if (!emailFromDB) {
    response.status(401).send({ msg: "Invalid credentials" });
  } else {
    const storedPassword = emailFromDB.password;
    const isPasswordMatch = await bcrypt.compare(password, storedPassword);
    // console.log(isPasswordMatch);

    // check is the password matches

    if (isPasswordMatch) {
      const token = jwt.sign({ id: emailFromDB._id }, process.env.SECRET_KEY);

      response.status(400).send({ msg: "Login sussesfully", token: token });
    } else {
      response.status(401).send({ msg: "Invalid credentials" });
    }
  }
});

export const usersRouter = router;
