import express from "express";

// controllers
import { fetchLeaderboard } from "../controllers/leaderboardController.js";

// middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(authenticate, fetchLeaderboard);

export default router;
