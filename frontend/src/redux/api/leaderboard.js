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
      providesTags: (result, error) =>
        result ? [{ type: "Leaderboard", id: "LIST" }] : [],
    }),
    updateLeaderboard: builder.mutation({
      query: () => ({
        url: `${LEADERBOARD_URL}`,
        method: "PUT",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
        //body: { selections },
      }),
    }),
  }),
});

export const { useFetchLeaderboardQuery, useUpdateLeaderboardMutation } =
  leaderboardApiSlice;
