import express from "express";

// controllers
import {
  createResults,
  fetchResults,
} from "../controllers/resultsController.js";

// middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(authenticate, authorizeAdmin, createResults);
router.route("/:week").get(authenticate, authorizeAdmin, fetchResults);
// router.route("/:userId/:week").put(authenticate, updateSelections);
// router.route("/:userId/:week").delete(authenticate, deleteSelections);

export default router;
