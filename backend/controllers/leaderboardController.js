import { syncUserScores } from "../data/syncScores.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/User.js";

const fetchLeaderboard = asyncHandler(async (req, res) => {
  try {
    const users = await User.find()
      .populate("score")
      .sort({ "score.total": -1 }) // 👑 Top scorers first
      .select("username score"); // return only what’s needed

    res.json(users);
  } catch (error) {
    console.error("Leaderboard fetch error:", error);
    res.status(500).json({ error: "Failed to fetch leaderboard" });
  }
});

const updateLeaderboard = asyncHandler(async (req, res) => {
  const { week } = req.params;
  const { weeklyScore } = req.body;
  try {
    await syncUserScores();
    res.status(200).json({ message: "User scores synchronized successfully." });
  } catch (err) {
    console.error("Error syncing scores:", err);
    res.status(500).json({ message: "Failed to sync scores." });
  }
});

export { fetchLeaderboard, updateLeaderboard };
