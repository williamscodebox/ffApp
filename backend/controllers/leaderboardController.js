import asyncHandler from "../middlewares/asyncHandler.js";

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

export { fetchLeaderboard };
