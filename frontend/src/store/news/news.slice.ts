import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import i18n from "../../locales/i18n";

const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/news/`, {
    method: "GET",
    headers: {
      "Accept-Language": i18n.language,
    },
  });
  const data = await response.json();
  return data;
});

interface INews {
  id: number;
  title: string;
  content: string;
  slug: string;
  status: string;
  publish: string;
  created: string;
  updated: string;
  image: string;
  content_html: string;
}

interface INewsState {
  news: INews[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: INewsState = {
  news: [],
  status: "idle",
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export { fetchNews, newsSlice };
