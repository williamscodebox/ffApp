import mongoose from "mongoose";

const selectionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Links to User schema
    week: { type: Number, required: true }, // Week number
    selections: [
      {
        gameKey: { type: String, required: true }, // Unique identifier ${date}-${teamA}-${teamB}
        team: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Selection = mongoose.model("Selection", selectionSchema);
export default Selection;
