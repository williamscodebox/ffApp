import { apiSlice } from "./apiSlice";
import { SELECTIONS_URL } from "../constants";

export const selectionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSelections: builder.mutation({
      query: (data) => ({
        url: `${SELECTIONS_URL}`,
        method: "POST",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`, // Send user token
        // },
        body: data,
      }),
    }),
    fetchSelections: builder.query({
      query: ({ userId, week }) => ({
        url: `${SELECTIONS_URL}/${userId}/${week}`, // Fetch selections by user & week
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      }),
    }),
  }),
});

export const { useCreateSelectionsMutation } = selectionsApiSlice;
