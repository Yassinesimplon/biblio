import express from "express";
import { deleteCOMMENT, newCOMMENT } from "../controllers/COMMENTControllers.js";

export const COMMENTRoutes = express.Router();

COMMENTRoutes.post("/", newCOMMENT)
COMMENTRoutes.delete("/delete/:id", deleteCOMMENT )
