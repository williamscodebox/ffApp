import mongoose from "mongoose";

const weeklyScoreSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Links to User schema
    week: { type: Number, required: true },
    correctSelections: { type: Number, required: true },
    totalSelections: { type: Number, required: true },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);
const WeeklyScore = mongoose.model("WeeklyScore", weeklyScoreSchema);
export default WeeklyScore;
