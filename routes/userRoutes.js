import express from "express";
import {newuser,newuser2,borrowedBooksHistory, getStats} from "../controllers/userControllers.js"

export const userRoutes = express.Router();



userRoutes.post("/client", newuser)
userRoutes.post("/admin", newuser2)
userRoutes.get('/stats', getStats);
userRoutes.get('/:userId', borrowedBooksHistory);

