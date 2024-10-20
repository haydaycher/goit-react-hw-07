import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;


export const selectFilter = (state) => state.filters.name;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, contactsFilter) => {
    if (!contactsFilter) return contacts; 
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
    );
  }
);
