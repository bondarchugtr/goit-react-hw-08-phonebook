import { createSlice } from "@reduxjs/toolkit";
import authOperation from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggenIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperation.register.fulfilled](state, action) {},
  },
});

export default authSlice.reducer;
