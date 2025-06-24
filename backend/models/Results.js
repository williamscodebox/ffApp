import mongoose from "mongoose";

const resultsSchema = new mongoose.Schema({
  week: { type: Number, required: true },
  gameId: { type: String, required: true, unique: true }, // Unique identifier ${date}-${teamA}-${teamB}
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true },
  winner: { type: String, enum: ["home", "away", "draw"], required: true },
  score: {
    home: { type: Number, required: true },
    away: { type: Number, required: true },
  },
  datePlayed: { type: Date, required: true },
});
const Results = mongoose.model("Results", resultsSchema);
export default Results;
