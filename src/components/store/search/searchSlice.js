import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { api } from "../../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getSearch = createAsyncThunk("/search", async (keyword) => {
  const response = await api("post", "/productsell/search", keyword);
  return response.data;
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchReset: (state) => {
      state.data = initialState.data;
    },
  },
  extraReducers(bulider) {
    bulider
      .addCase(getSearch.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getSearch.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getSearch.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
        state.data = initialState.data;
      });
  },
});

export const { searchReset } = searchSlice.actions;

export default searchSlice.reducer;
