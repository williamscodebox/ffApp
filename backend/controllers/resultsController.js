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

const fetchResults = asyncHandler(async (req, res) => {
  const { week } = req.params;

  const results = await Results.findOne({ week });

  if (!results) {
    // return res
    //   .status(404)
    //   .json({ message: `No selections found for Week ${week}` });
    return res.status(200).json({ week, results: [] }); // ← explicitly empty
  }

  res.json(results);
});

const updateResults = asyncHandler(async (req, res) => {
  const { week } = req.params;
  const { results } = req.body;

  const existingResults = await Results.findOne({ week });

  if (!existingResults) {
    return res
      .status(404)
      .json({ message: `No results found for Week ${week}` });
  }

  existingResults.winners = results; // Update results
  await existingresults.save();

  res.status(200).json({
    message: `Results for Week ${week} updated successfully`,
    results,
  });
});

const deleteResults = asyncHandler(async (req, res) => {
  const { week } = req.params;

  const deletedResults = await Results.findOneAndDelete({ week });

  if (!deletedResults) {
    return res
      .status(404)
      .json({ message: `No Result found for Week ${week}` });
  }

  res.json({ message: `Results for Week ${week} deleted successfully` });
});

export { createResults, fetchResults, updateResults, deleteResults };
