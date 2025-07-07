import asyncHandler from "../middlewares/asyncHandler.js";
import WeeklyScore from "../models/WeeklyScore.js";

const bulkCreateWeekly = asyncHandler(async (req, res) => {
  const scores = req.body;

  if (!Array.isArray(scores)) {
    return res.status(400).json({ message: "Expected an array of scores" });
  }

  try {
    const ops = scores.map((score) => ({
      updateOne: {
        filter: { userId: score.userId, week: score.week },
        update: {
          $set: {
            correctSelections: score.correctSelections,
            totalSelections: score.totalSelections,
          },
        },
        upsert: true,
      },
    }));

    await WeeklyScore.bulkWrite(ops);
    res
      .status(200)
      .json({ message: "Bulk weekly scores processed successfully." });
  } catch (err) {
    console.error("❌ Bulk write error:", err);
    res
      .status(500)
      .json({ message: "Failed to process weekly scores", error: err.message });
  }
});

export { bulkCreateWeekly };
