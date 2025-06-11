import { create } from "zustand";

export const useDates = create((set) => ({
  value: [
    "Sept 4",
    "Sept 5",
    "Sept 6",
    "Sept 7",
    "Sept 8",
    "Sept 9",
    "Sept 10",
  ],

  setValues: (newValues) => set({ value: newValues }),
}));
