// src/api/postsApi.js
import axios from "axios";

const postsApi = {
  getAllPosts: () => axios.get("https://dummyjson.com/posts"),
};

export default postsApi;
