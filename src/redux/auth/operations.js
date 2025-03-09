// email: "teydabipso@gufum.com";
// name: "teydabipso";
// password: "teydabipso@gufum.com";

// tapsenakka@gufum.com

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

//витягуємо токен :
const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
//видаляємо токен:
const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = ``;
};
export const registerThunk = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("/users/signup", body);
      setAuthHeader(data.token);
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
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await api.post("/users/logout");
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const saveToken = thunkAPI.getState().auth.token;
      if (saveToken === null) {
        return thunkAPI.rejectWithValue("Token is not exist!");
      }
      setAuthHeader(saveToken);
      const { data } = await api.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
