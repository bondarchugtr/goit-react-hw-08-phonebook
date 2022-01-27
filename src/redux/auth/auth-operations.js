import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/user/signup", credentials);
    return data;
  } catch (error) {}
});

const operations = {
  register,
  // logOut,
  // logIn,
  // fetchCurrentUser,
};
export default operations;
