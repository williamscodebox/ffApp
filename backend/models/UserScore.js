import mongoose from "mongoose";

const userScoreSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  weekScores: {
    Week_1: { type: Number, default: 0 },
    Week_2: { type: Number, default: 0 },
    Week_3: { type: Number, default: 0 },
    Week_4: { type: Number, default: 0 },
    Week_5: { type: Number, default: 0 },
    Week_6: { type: Number, default: 0 },
    Week_7: { type: Number, default: 0 },
    Week_8: { type: Number, default: 0 },
    Week_9: { type: Number, default: 0 },
    Week_10: { type: Number, default: 0 },
    Week_11: { type: Number, default: 0 },
    Week_12: { type: Number, default: 0 },
    Week_13: { type: Number, default: 0 },
    Week_14: { type: Number, default: 0 },
    Week_15: { type: Number, default: 0 },
    Week_16: { type: Number, default: 0 },
    Week_17: { type: Number, default: 0 },
    Week_18: { type: Number, default: 0 },
  },

  total: { type: Number, default: 0 },
});

// Auto-calculate total before saving
userScoreSchema.pre("save", function (next) {
  const scores = this.weekScores || {};
  this.total = Object.values(scores).reduce(
    (sum, val) => sum + Number(val || 0),
    0
  );
  next();
});

const UserScore = mongoose.model("UserScore", userScoreSchema);
export default UserScore;
