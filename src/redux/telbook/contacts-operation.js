import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";
export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (name) => {
    const contact = {
      name: name.name,
      number: name.number,
    };
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactid) => {
    try {
      await axios.delete(`/contacts/${contactid}`);
      return contactid;
    } catch (error) {
      return error;
    }
  }
);
