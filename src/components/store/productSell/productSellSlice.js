import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { api } from "../../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getProduct = createAsyncThunk("/productsell", async () => {
  const response = await api("get", "/productsell");
  return response.data;
});
export const putDetailProduct = createAsyncThunk(
    "/productsellput",
    async (id) => {
      const response = await api("put", `/productsell/${id}`);
      return id;
    }
  );
const productSellSlice = createSlice({
  name: "productSell",
  initialState,
  reducers: {
    reload: (state, { payload }) => {
      console.log(payload, state.data);
      
    },
  },
  extraReducers(bulider) {
    bulider
      .addCase(getProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(putDetailProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(putDetailProduct.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = state.data.map((el) => {
            if (el.id == action.payload) {
              return { ...el, isSold: true };
            }
            return el;
          });
      })
      .addCase(putDetailProduct.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export const { reload } = productSellSlice.actions;

export default productSellSlice.reducer;
