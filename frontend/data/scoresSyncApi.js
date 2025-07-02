import express from "express";
import { syncUserScores } from "../services/scoreService.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/sync-scores", protect, isAdmin, async (req, res) => {
  try {
    await syncUserScores();
    res.status(200).json({ message: "User scores synchronized successfully." });
  } catch (err) {
    console.error("Error syncing scores:", err);
    res.status(500).json({ message: "Failed to sync scores." });
  }
});
