import { apiSlice } from "./apiSlice";
import { RESULTS_URL } from "../constants";

export const resultsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createResults: builder.mutation({
      query: (data) => ({
        url: `${RESULTS_URL}`,
        method: "POST",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`, // Send user token
        // },
        body: data,
      }),
    }),
  }),
});

export const { useCreateResultsMutation } = selectionsApiSlice;
