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
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } } // Automatically adds createdAt and updatedAt fields
);
weeklyScoreSchema.index({ userId: 1, week: 1 }, { unique: true });
weeklyScoreSchema.virtual("accuracy").get(function () {
  return this.totalSelections > 0
    ? (this.correctSelections / this.totalSelections) * 100
    : 0;
});

const WeeklyScore = mongoose.model("WeeklyScore", weeklyScoreSchema);
export default WeeklyScore;
