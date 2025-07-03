import asyncHandler from "../middlewares/asyncHandler.js";
import WeeklyScore from "../models/WeeklyScore.js";

const createWeekly = asyncHandler(async (req, res) => {
  const { userId, week, correctSelections, totalSelections } = req.body;

  const existingWeekly = await WeeklyScore.findOne({ userId, week });
  if (existingWeekly) {
    res.status(400);
    throw new Error(`Weekly score for Week ${week + 1} already exists`);
  }

  const newWeekly = new WeeklyScore({
    userId,
    week,
    correctSelections,
    totalSelections,
  });

  try {
    await newWeekly.save();

    res.status(201).json({
      _id: newWeekly.userId,
      week: newWeekly.week,
      correct_selections: newWeekly.correctSelections,
      total_selections: newWeekly.totalSelections,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid weekly score data");
  }
});

export { createWeekly };
