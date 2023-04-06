import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";
const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getAuctionComment = createAsyncThunk(
  "/auctionBuy/comment",
  async (id) => {
    const response = await api("get", `/auction/${id}/comment`);
    return response.data;
  }
);

const auctionCommentSlice = createSlice({
  name: "auctionComment",
  initialState,
  reducers: {},
  extraReducers(bulider) {
    bulider
      .addCase(getAuctionComment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAuctionComment.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getAuctionComment.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default auctionCommentSlice.reducer;
