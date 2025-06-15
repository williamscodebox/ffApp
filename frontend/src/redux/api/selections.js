import { apiSlice } from "./apiSlice";
import { SELECTIONS_URL } from "../constants";

export const selectionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSelections: builder.mutation({
      query: (data) => ({
        url: `${SELECTIONS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateSelectionMutation } = selectionsApiSlice;
