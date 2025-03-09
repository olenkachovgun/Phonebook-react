import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
  editContact,
  //   updateLikeStatus,
} from "./operations";
import { logoutThunk } from "../auth/operations";

// Початковий стан редюсера слайсу:
const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.isError = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};
const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(editContact.fulfilled, (state, action) => {
        const item = state.items.find((item) => item.id === action.payload.id);
        item.name = action.payload.name;
        item.number = action.payload.number;
      })
      .addCase(editContact.rejected, handleRejected)
      .addCase(logoutThunk.fulfilled, () => initialState);

    //   .addCase(updateLikeStatus.fulfilled, (state, action) => {
    //     const item = state.items.find((item) => item.id === action.payload.id);
    //     if (item) {
    //       item.like = !item.like;
    //     }
    //   })
    //   .addCase(updateLikeStatus.rejected, handleRejected);
  },
});

export const contactsReducer = slice.reducer;
