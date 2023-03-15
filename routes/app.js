import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userRoutes } from "./routes/userRoutes.js";
import { COMMENTRoutes } from "./routes/COMMENTRoutes.js";
import { categorieRoutes } from "./routes/categorieRoutes.js";
import { empruntRoutes } from "./routes/empruntRoutes.js";
import { livreRoutes } from "./routes/livreRoutes.js";
import{adminAuthValidation} from './middelwares/jwt.js'
dotenv.config();
const port = process.env.PORT;
const dbURI = process.env.DBURI;

const app = express();
mongoose.set("strictQuery", true);
mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(port, () => {
      console.log(`this app is running in port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/users", userRoutes);
app.use("/COMMENT", COMMENTRoutes);
app.use("/categories", categorieRoutes);
app.use("/emprunts", empruntRoutes);
app.use("/livres", livreRoutes);
app.get('/login',adminAuthValidation)
app.get("/", (req, res) => {
  res.send("Hello world");
});
