// email: "teydabipso@gufum.com";
// name: "teydabipso";
// password: "teydabipso@gufum.com";
// {email: 'teydabipso@gufum.com', name: 'teydabipso', password: 'teydabipso@gufum.com'}

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://connections-api.goit.global/",
});
export const registerThunk = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("/users/signup", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("/users/login", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
