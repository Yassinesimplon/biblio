import mongoose from "mongoose";

const Schema = mongoose.Schema;

const COMMENTSchema = new Schema(
  {
    userInherit: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    livreInherit: {
      type: Schema.Types.ObjectId,
      ref: "livre",
    },
    commentaire: {
      type: String,
      required: true,
    },
  },
  
  { timestamps: true }
);

export const COMMENT = mongoose.model("COMMENT", COMMENTSchema);
