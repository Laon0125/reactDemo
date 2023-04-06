import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { api } from "../../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getMyProduct = createAsyncThunk("/myProductSell", async () => {
  const response = await api("get", "/user/me/selling");
  return response.data;
});

const myProductSellSlice = createSlice({
  name: "myProductSell",
  initialState,
  reducers: {},
  extraReducers(bulider) {
    bulider
      .addCase(getMyProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMyProduct.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getMyProduct.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default myProductSellSlice.reducer;
