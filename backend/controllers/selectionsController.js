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

const fetchSelections = asyncHandler(async (req, res) => {
  const { userId, week } = req.params;

  const selections = await Selection.findOne({ userId, week });

  if (!selections) {
    // return res
    //   .status(404)
    //   .json({ message: `No selections found for Week ${week}` });
    return res.status(200).json({ week, selections: [] }); // ← explicitly empty
  }

  res.json(selections);
});
const updateSelections = asyncHandler(async (req, res) => {
  const { userId, week } = req.params;
  const { selections } = req.body;

  const existingSelections = await Selection.findOne({ userId, week });

  if (!existingSelections) {
    return res
      .status(404)
      .json({ message: `No selections found for Week ${week}` });
  }

  existingSelections.selections = selections; // Update selections
  await existingSelections.save();

  res.status(200).json({
    message: `Selections for Week ${week} updated successfully`,
    selections,
  });
});

const deleteSelections = asyncHandler(async (req, res) => {
  const { userId, week } = req.params;

  const deletedSelections = await Selection.findOneAndDelete({ userId, week });

  if (!deletedSelections) {
    return res
      .status(404)
      .json({ message: `No selections found for Week ${week}` });
  }

  res.json({ message: `Selections for Week ${week} deleted successfully` });
});

const fetchAllSelections = asyncHandler(async (req, res) => {
  const { week } = req.params;

  const allUsersSelections = await Selection.find({ week });

  if (!allUsersSelections) {
    return res
      .status(404)
      .json({ message: `No selections found for Week ${week}` });
    //return res.status(200).json({ week, selections: [] }); // ← explicitly empty
  }

  res.json(allUsersSelections);
});

export {
  createSelections,
  fetchSelections,
  deleteSelections,
  updateSelections,
  fetchAllSelections,
};
