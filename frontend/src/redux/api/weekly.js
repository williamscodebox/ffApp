import { apiSlice } from "./apiSlice";
import { WEEKLY_URL } from "../constants";

export const weeklyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    bulkCreateWeekly: builder.mutation({
      query: (data) => ({
        url: `${WEEKLY_URL}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useBulkCreateWeeklyMutation } = weeklyApiSlice;
