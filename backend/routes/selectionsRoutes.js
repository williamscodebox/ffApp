import express from "express";

// controllers
import {
  createSelections,
  deleteSelections,
  fetchSelections,
} from "../controllers/selectionsController.js";

// middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(authenticate, createSelections);
router.route("/:userId/:week").get(authenticate, fetchSelections);
router.route("/:userId/:week").delete(authenticate, deleteSelections);

// router.post("/auth", loginUser);
// router.post("/logout", logoutCurrentUser);

// router
//   .route("/profile")
//   // .get(authenticate, getCurrentUserProfile)
//   .put(authenticate, updateCurrentUserProfile);

export default router;
