// routes/actors.js
import { Router } from "express";
import {
  getActors,
  getAddActor,
  postAddActor,
} from "../controllers/actorController.js";

export const actorRouter = Router();
actorRouter.get("/", getActors);
actorRouter.get("/add", getAddActor);
actorRouter.post("/add", postAddActor);
