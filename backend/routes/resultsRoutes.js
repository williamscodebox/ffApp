import express from "express";

// controllers
import {
  createResults,
  fetchResults,
  updateResults,
  deleteResults,
} from "../controllers/resultsController.js";

// middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(authenticate, authorizeAdmin, createResults);
router.route("/:week").get(authenticate, authorizeAdmin, fetchResults);
router.route("/:week").put(authenticate, authorizeAdmin, updateResults);
router.route("/:week").delete(authenticate, authorizeAdmin, deleteResults);

export default router;
