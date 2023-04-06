import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getDetailAuctionComment = createAsyncThunk(
  "/auctionComment/id",
  async ({ auctionId, commentId }) => {
    console.log(auctionId, commentId);
    const response = await api(
      "get",
      `/auction/${auctionId}/comment/${commentId}`
    );
    return response.data;
  }
);

export const putDetailComment = createAsyncThunk(
  "/auctionCommentPut",
  async ({ auctionId, commentId }) => {
    const response = await api(
      "put",
      `/auction/${auctionId}/comment/${commentId}`
    );
  }
);

const detailAuctionCommentSlice = createSlice({
  name: "detailAuctionComment",
  initialState,
  reducers: {},
  extraReducers(bulider) {
    bulider
      .addCase(getDetailAuctionComment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getDetailAuctionComment.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getDetailAuctionComment.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(putDetailComment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(putDetailComment.fulfilled, (state, action) => {
        state.status = "successed";
      })
      .addCase(putDetailComment.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default detailAuctionCommentSlice.reducer;
