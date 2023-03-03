import express from "express";
import { newcategorie } from "../controllers/categorieControllers.js";
export const categorieRoutes = express.Router();


categorieRoutes.post("/", newcategorie)

