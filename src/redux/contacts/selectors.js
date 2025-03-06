import { createSelector } from "@reduxjs/toolkit";
import { filterNameContacts } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, filterNameContacts],
  (contacts, filter) =>
    contacts.filter(
      (item) =>
        item.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
        item.number.includes(filter.trim())
    )
);
