import express from "express";
import { getlivre, Onelivre,newlivre } from "../controllers/livreControllers.js";

export const livreRoutes = express.Router();

livreRoutes.get("/", getlivre)
livreRoutes.get("/find/:id", Onelivre )
livreRoutes.post("/", newlivre)

