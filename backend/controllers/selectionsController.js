import asyncHandler from "../middlewares/asyncHandler.js";
import Selection from "../models/Selections.js";

const createSelections = asyncHandler(async (req, res) => {
  const { selectionsArray } = req.body;
  const { userId } = req.body;

  const existingSelections = await Selection.findOne({ userId });
  if (existingSelections) {
    res.status(400);
    throw new Error("Selections already exists");
  }

  const newSelections = new Selection({
    userId,
    selections: selectionsArray,
  });

  try {
    await newSelections.save();

    res.status(201).json({
      _id: newSelections.userId,
      selections: newSelections.selectionsArray,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid selections data");
  }
});

export { createSelections };
