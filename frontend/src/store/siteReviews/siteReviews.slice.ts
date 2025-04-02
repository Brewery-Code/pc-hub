import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import i18n from "../../locales/i18n";

const fetchSiteReviews = createAsyncThunk(
  "siteReviews/fetchSiteReviews",
  async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/core/reviews/`,
      {
        method: "GET",
        headers: {
          "Accept-Language": i18n.language,
        },
      },
    );

    return await response.json();
  },
);

interface ISiteReview {
  user: {
    username: string;
    avatar: string;
  };
  content: string;
  rating: number;
  created_at: string;
  replay: string;
}

interface ISiteReviews {
  reviews: ISiteReview[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ISiteReviews = {
  reviews: [],
  status: "idle",
  error: null,
};

const siteReviewsSlice = createSlice({
  name: "siteReviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSiteReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSiteReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reviews = action.payload;
      })
      .addCase(fetchSiteReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export { siteReviewsSlice, fetchSiteReviews };
