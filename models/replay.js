import mongoose from "mongoose";

const Schema = mongoose.Schema;

const replaySchema = new Schema(
  {
    userInherit: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    livreInherit: {
      type: Schema.Types.ObjectId,
      ref: "livre",
    },
   COMMENTInherit: {
        type: Schema.Types.ObjectId,
        ref: "COMMENT",
    },
    replay: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

export const replay = mongoose.model("replay", replaySchema);
