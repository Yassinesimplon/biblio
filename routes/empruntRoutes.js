import express from "express";
import {newemprunt,getemprunt,deleteemprunt,renewEmprunt} from "../controllers/empruntControllers.js"


export const empruntRoutes = express.Router();

empruntRoutes.post("/", newemprunt)

empruntRoutes.post("/", renewEmprunt)

empruntRoutes.get("/", getemprunt)

empruntRoutes.delete("/delete/:id", deleteemprunt )





