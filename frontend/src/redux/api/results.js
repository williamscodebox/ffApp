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
    fetchResults: builder.query({
      query: ({ week }) => ({
        url: `${RESULTS_URL}/${week}`, // Fetch results by week
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      }),
      // providesTags: (result, error, { userId, week }) =>
      //   result ? [{ type: "Selections", id: `${userId}-${week}` }] : [],
    }),
    deleteResults: builder.mutation({
      query: ({ week }) => ({
        url: `${RESULTS_URL}/${week}`,
        method: "DELETE",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      }),
    }),
    updateResults: builder.mutation({
      query: ({ week, results }) => ({
        url: `${RESULTS_URL}/${week}`,
        method: "PUT",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
        body: { results },
      }),
      invalidatesTags: (result, error, { week }) => [
        { type: "Results", id: `${week}` },
      ],
    }),
  }),
});

export const {
  useCreateResultsMutation,
  useFetchResultsQuery,
  useDeleteResultsMutation,
  useUpdateResultsMutation,
} = resultsApiSlice;
