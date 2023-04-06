import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getDetailAuctionBuy = createAsyncThunk(
  "/auctionBuy/id",
  async (id) => {
    const response = await api("get", `/auction/${id}`);
    return response.data;
  }
);

const detailAuctionBuySlice = createSlice({
  name: "detailAuctionBuy",
  initialState,
  reducers: {},
  extraReducers(bulider) {
    bulider
      .addCase(getDetailAuctionBuy.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getDetailAuctionBuy.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getDetailAuctionBuy.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default detailAuctionBuySlice.reducer;
