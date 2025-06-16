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
  }),
});

export const { useCreateSelectionsMutation } = selectionsApiSlice;
