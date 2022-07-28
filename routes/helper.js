import { client } from "../index.js";
import { ObjectId } from "mongodb";

export async function createUser(data) {
  return await client.db("guvi-node-app").collection("users").insertOne(data);
}
