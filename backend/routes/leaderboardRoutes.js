import express from "express";

// controllers
import {
  fetchLeaderboard,
  updateLeaderboard,
} from "../controllers/leaderboardController.js";

// middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(authenticate, fetchLeaderboard);
router.route("/").put(authenticate, authorizeAdmin, updateLeaderboard);

export default router;
