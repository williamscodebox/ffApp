import express from "express";

// controllers
import {} from "../controllers/selectionsController.js";

// middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/selections").post(authenticate, createSelections);
// // .get(authenticate, authorizeAdmin, getAllUsers);

// router.post("/auth", loginUser);
// router.post("/logout", logoutCurrentUser);

// router
//   .route("/profile")
//   // .get(authenticate, getCurrentUserProfile)
//   .put(authenticate, updateCurrentUserProfile);

export default router;
