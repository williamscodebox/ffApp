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
      invalidatesTags: (result, error, { userId, week }) => [
        { type: "Selections", id: `${userId}-${week}` },
      ],
    }),
    fetchSelections: builder.query({
      query: ({ userId, week }) => ({
        url: `${SELECTIONS_URL}/${userId}/${week}`, // Fetch selections by user & week
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      }),
      providesTags: (result, error, { userId, week }) =>
        result ? [{ type: "Selections", id: `${userId}-${week}` }] : [],
    }),
    deleteSelections: builder.mutation({
      query: ({ userId, week }) => ({
        url: `${SELECTIONS_URL}/${userId}/${week}`,
        method: "DELETE",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      }),
      invalidatesTags: (result, error, { userId, week }) => [
        { type: "Selections", id: `${userId}-${week}` },
      ],
    }),
    updateSelections: builder.mutation({
      query: ({ userId, week, selections }) => ({
        url: `${SELECTIONS_URL}/${userId}/${week}`,
        method: "PUT",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
        body: { selections },
      }),
      invalidatesTags: (result, error, { userId, week }) => [
        { type: "Selections", id: `${userId}-${week}` },
      ],
    }),
    fetchAllSelections: builder.query({
      query: ({ week }) => ({
        url: `${SELECTIONS_URL}/${week}`, // Fetch selections by user & week
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      }),
    }),
  }),
});

export const {
  useCreateSelectionsMutation,
  useDeleteSelectionsMutation,
  useFetchSelectionsQuery,
  useUpdateSelectionsMutation,
  useFetchAllSelectionsQuery,
  useLazyFetchAllSelectionsQuery,
} = selectionsApiSlice;
