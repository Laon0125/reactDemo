import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getMyAuction = createAsyncThunk("/myAuctionBuy", async () => {
  const response = await api("get", "/user/me/buying");
  return response.data;
});

const myAuctionBuySlice = createSlice({
  name: "myAuctionBuy",
  initialState,
  reducers: {},
  extraReducers(bulider) {
    bulider
      .addCase(getMyAuction.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMyAuction.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getMyAuction.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default myAuctionBuySlice.reducer;
