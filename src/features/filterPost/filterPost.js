import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchPosts = createAsyncThunk(
  "posts/searchPosts",
  async (searchQuery) => {
    const response = await axios.get(
      `https://dummyjson.com/posts/search?q=${searchQuery}`
    );
    return response.data;
  }
);

const getPosts = createSlice({
  name: "posts",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(searchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default getPosts.reducer;
