import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { api } from "../../../api/api";

// 최초값
const initialState = {
  data: {},
  status: "idle",
  error: null,
};

// 로그인 통신
export const login = createAsyncThunk("user/login", async (user) => {
  const response = //
    await api("post", "/user/login", user);
  return response.data;
});

export const getMe = createAsyncThunk("user/me", async () => {
  const response = await api("get", "/user/me");
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = initialState.data;
      state.error = initialState.error;
      state.status = initialState.status;
      localStorage.clear();
    },
  },
  extraReducers(bulider) {
    bulider
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(getMe.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
