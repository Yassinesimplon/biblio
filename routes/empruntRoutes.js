import express from "express";
import {newemprunt,getemprunt,deleteemprunt} from "../controllers/empruntControllers.js"


export const empruntRoutes = express.Router();

empruntRoutes.post("/", newemprunt)

empruntRoutes.get("/", getemprunt)

empruntRoutes.delete("/delete/:id", deleteemprunt )





