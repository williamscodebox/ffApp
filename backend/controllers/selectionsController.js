import asyncHandler from "../middlewares/asyncHandler.js";
import Selection from "../models/Selections.js";

const createSelections = asyncHandler(async (req, res) => {
  const { selectionsArray, userId, week } = req.body;

  const existingSelections = await Selection.findOne({ userId, week });
  if (existingSelections) {
    res.status(400);
    throw new Error(`Selections for Week ${week + 1} already exists`);
  }

  const newSelections = new Selection({
    userId,
    week,
    selections: selectionsArray,
  });

  try {
    await newSelections.save();

    res.status(201).json({
      _id: newSelections.userId,
      week: newSelections.week,
      selections: newSelections.selectionsArray,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid selections data");
  }
});

export { createSelections };
