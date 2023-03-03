import mongoose from "mongoose";

const Schema = mongoose.Schema;

const empruntSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },

    livre: {
      type: Schema.Types.ObjectId,
      ref: "livre",
    },
   
 

},
{ timestamps: true }

);

export const emprunt = mongoose.model("emprunt", empruntSchema);
