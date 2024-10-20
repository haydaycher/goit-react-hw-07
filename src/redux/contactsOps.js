import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://670d65e8073307b4ee436b55.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/");
      return res.data;
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const res = await axios.post("/", newContact);
      return res.data;
    } catch (error) {
      console.error("Failed to add contact:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/${contactId}`);
      return res.data;
    } catch (error) {
      console.error("Failed to delete contact:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
