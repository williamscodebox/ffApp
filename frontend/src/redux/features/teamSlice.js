import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [
    "Bills",
    "Dolphins",
    "Patriots",
    "Jets",
    "Ravens",
    "Bengals",
    "Browns",
    "Steelers",
    "Texans",
    "Colts",
    "Jaguars",
    "Titans",
    "Broncos",
    "Chiefs",
    "Raiders",
    "Chargers",
    "Cowboys",
    "Giants",
    "Eagles",
    "Commanders",
    "Bears",
    "Lions",
    "Packers",
    "Vikings",
    "Falcons",
    "Panthers",
    "Saints",
    "Buccaneers",
    "Cardinals",
    "Rams",
    "49ers",
    "Seahawks",
  ],
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
});

// export const { pickTeam } = teamSlice.actions;
export default teamSlice.reducer;
