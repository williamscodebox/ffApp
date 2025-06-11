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
  value: [
    "Sept 4",
    "Sept 5",
    "Sept 6",
    "Sept 7",
    "Sept 8",
    "Sept 9",
    "Sept 10",
  ],
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setValues: (state, action) => {
      return { ...state, value: action.payload };
    },
  },
});

export const { setValues } = teamSlice.actions;
export default teamSlice.reducer;
