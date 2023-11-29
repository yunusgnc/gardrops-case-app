// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import filterPost from "../features/filterPost/filterPost";
import getPostById from "../features/getPost/getPostById";

const store = configureStore({
  reducer: {
    posts: filterPost,
    singlePost: getPostById,
  },
});

export default store;
