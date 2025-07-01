import express from "express";

// controllers
import {
  createSelections,
  deleteSelections,
  fetchAllSelections,
  fetchSelections,
  updateSelections,
} from "../controllers/selectionsController.js";

// middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(authenticate, createSelections);
router.route("/:userId/:week").get(authenticate, fetchSelections);
router.route("/:userId/:week").put(authenticate, updateSelections);
router.route("/:userId/:week").delete(authenticate, deleteSelections);
router.route("/:week").get(authenticate, authorizeAdmin, fetchAllSelections);

export default router;
