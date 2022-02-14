import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addFilter } from "./action";

import { fetchContacts, addContact, deleteContact } from "./contacts-operation";
const itemReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,

  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const filterReducer = createReducer("", {
  [addFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items: itemReducer,
  filter: filterReducer,
  loading: loading,
});
