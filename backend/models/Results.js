import mongoose from "mongoose";

const resultsSchema = new mongoose.Schema({
  week: { type: Number, required: true },
  winners: [
    {
      gameKey: { type: String, required: true }, // Unique identifier ${date}-${teamA}-${teamB}
      team: { type: String, required: true },
    },
  ],
});
const Results = mongoose.model("Results", resultsSchema);
export default Results;
