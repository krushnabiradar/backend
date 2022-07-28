import { client } from "../index.js";
import { ObjectId } from "mongodb";

export async function createUser(data) {
  return await client.db("guvi-node-app").collection("users").insertOne(data);
}

export async function getUserByEmail(email) {
  return await client
    .db("guvi-node-app")
    .collection("users")
    .findOne({ email: email });
}
