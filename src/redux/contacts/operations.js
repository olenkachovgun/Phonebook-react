import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../auth/operations";
// //витягуємо токен :
// const setAuthHeader = (token) => {
//   api.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
export const fetchContacts = createAsyncThunk(
  "contacts/fetchData",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/contacts");
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const { data } = await api.post("/contacts", newContact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ id, name, number }, thunkAPI) => {
    try {
      const { data } = await api.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateLikeStatus = createAsyncThunk(
  "contacts/updateLikeStatus",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.patch(`contacts/${body.id}`, body);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
