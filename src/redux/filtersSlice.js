import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};
export const filterNameContacts = (state) => state.filters.name;

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
    resetFilter: () => {
      return initialState;
    },
  },
});

export const filtersReducer = slice.reducer;
export const { setFilter, resetFilter } = slice.actions;
