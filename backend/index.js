console.log("Getting up and running...");

// Packages
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

// Files
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import selectionsRoutes from "./routes/selectionsRoutes.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";
import resultsRoutes from "./routes/resultsRoutes.js";
import weeklyRoutes from "./routes/weeklyRoutes.js";

// Configuration
dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

// Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/selections", selectionsRoutes);
app.use("/api/v1/leaderboard", leaderboardRoutes);
app.use("/api/v1/results", resultsRoutes);
app.use("/api/v1/weekly", weeklyRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
