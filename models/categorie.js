import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorieSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    nom: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Categorie = mongoose.model("categorie", categorieSchema);
