import mongoose from "mongoose";

const Schema = mongoose.Schema;

const livreSchema = new Schema({

  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Categorie",
    },
  ],
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateCreation: {
    type: Date,
    default: Date.now,
  },
  dateLimit: Date,
});

export const livre = mongoose.model("livre", livreSchema);
