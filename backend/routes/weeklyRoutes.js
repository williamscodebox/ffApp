import express from "express";

// controllers
import {
  createUser,
  loginUser,
  logoutCurrentUser,
} from "../controllers/weeklyController.js";

// middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(authenticate, authorizeAdmin, createWeekly);
// // .get(authenticate, authorizeAdmin, getAllUsers);

export default router;
