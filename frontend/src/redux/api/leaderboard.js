import { apiSlice } from "./apiSlice";
import { LEADERBOARD_URL } from "../constants";

export const leaderboardApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchLeaderboard: builder.query({
      query: () => ({
        url: `${LEADERBOARD_URL}`, // Fetch leaderboard
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      }),
    }),
  }),
});

export const { useFetchLeaderboardQuery } = leaderboardApiSlice;
