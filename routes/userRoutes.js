import express from "express";
import {newuser,newuser2} from "../controllers/userControllers.js"

export const userRoutes = express.Router();



userRoutes.post("/client", newuser)
userRoutes.post("/admin", newuser2)
