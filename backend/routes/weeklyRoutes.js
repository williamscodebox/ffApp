import express from "express";

// controllers
import { bulkCreateWeekly } from "../controllers/weeklyController.js";

// middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(authenticate, authorizeAdmin, bulkCreateWeekly);
// // .get(authenticate, authorizeAdmin, getAllUsers);

export default router;
