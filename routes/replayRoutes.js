import express from "express";
import { newreplay } from "../controllers/replayControllers.js";

export const replayRoutes = express.Router();


replayRoutes.get("/", newreplay)

