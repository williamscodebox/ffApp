import asyncHandler from "../middlewares/asyncHandler.js";
import Results from "../models/Results.js";

const createResults = asyncHandler(async (req, res) => {
  const { selectionsArray, week } = req.body;
  const existingResults = await Results.findOne({ week });
  if (existingResults) {
    res.status(400);
    throw new Error(`Results for Week ${week + 1} already exists`);
  }
  const newResults = new Results({
    week,
    winners: selectionsArray,
  });
  try {
    await newResults.save();
    res.status(201).json({
      week: newResults.week,
      winners: newResults.selectionsArray,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid Results data");
  }
});

export {};
